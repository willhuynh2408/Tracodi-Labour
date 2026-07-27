import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { vi } from "@payloadcms/translations/languages/vi";
import { revalidatePath } from "next/cache";
import { buildConfig } from "payload";
import sharp from "sharp";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const isAdmin = ({ req }: any) => req.user?.role === "admin";
const isEditor = ({ req }: any) => req.user?.role === "admin" || req.user?.role === "editor";
const publishedOrEditor = ({ req }: any) => {
  if (req.user) return true;
  return {
    _status: {
      equals: "published"
    }
  };
};

const revalidateFrontend = async () => {
  try {
    revalidatePath("/");
  } catch {
    // Revalidation is only available during Next request/runtime contexts.
  }
};

const contentLocales = [
  { name: "vi", label: "Tiếng Việt" },
  { name: "en", label: "English" },
  { name: "ja", label: "日本語" }
];

const languageText = ({
  admin,
  label,
  name,
  required = false,
  type = "text"
}: {
  admin?: Record<string, unknown>;
  label: string;
  name: string;
  required?: boolean;
  type?: "text" | "textarea";
}): any => ({
  name,
  label,
  type: "group",
  admin: {
    ...admin,
    description: "Edit all website languages here. Vietnamese is used as the source/fallback."
  },
  fields: contentLocales.map((locale) => ({
    name: locale.name,
    label: locale.label,
    type,
    required: required && locale.name === "vi"
  }))
});

const hiddenLegacyField = (field: Record<string, unknown>): any => ({
  ...field,
  admin: {
    ...((field.admin as Record<string, unknown>) || {}),
    hidden: true
  }
});

const firstFilledText = (...values: any[]) => {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value;
  }

  return undefined;
};

const normalizeLanguageGroup = (data: any, originalDoc: any, legacyField: string, allLanguagesField: string) => {
  const existing = originalDoc?.[allLanguagesField] && typeof originalDoc[allLanguagesField] === "object"
    ? originalDoc[allLanguagesField]
    : {};
  const incoming = data?.[allLanguagesField] && typeof data[allLanguagesField] === "object"
    ? data[allLanguagesField]
    : {};
  const merged = {
    ...existing,
    ...incoming
  };
  const fallback = firstFilledText(merged.vi, merged.en, merged.ja, data?.[legacyField], originalDoc?.[legacyField]);

  if (fallback) {
    for (const locale of contentLocales) {
      merged[locale.name] = firstFilledText(merged[locale.name], fallback);
    }

    data[allLanguagesField] = merged;
    data[legacyField] = merged.vi;
  }
};

const applyTranslationSource = (data: any, legacyField: string, allLanguagesField: string, originalDoc?: any) => {
  normalizeLanguageGroup(data, originalDoc, legacyField, allLanguagesField);
};

const syncRecruitmentTabLanguages = ({ data, originalDoc }: any) => {
  if (!data) return data;

  applyTranslationSource(data, "label", "labelAll", originalDoc);
  data.displayName = data.labelAll?.vi || data.label || data.displayName;

  if (Array.isArray(data.aviationCards)) {
    for (const card of data.aviationCards) {
      applyTranslationSource(card, "title", "titleAll");

      if (Array.isArray(card.items)) {
        for (const item of card.items) {
          applyTranslationSource(item, "text", "textAll");
        }
      }
    }
  }

  return data;
};

const syncJobOrderLanguages = ({ data, originalDoc }: any) => {
  if (!data) return data;

  for (const field of ["title", "field", "imageAlt", "market", "salary", "location", "interviewDateLabel"]) {
    applyTranslationSource(data, field, `${field}All`, originalDoc);
  }

  return data;
};

const syncHomePageLanguages = ({ data }: any) => {
  if (!data?.recruitment) return data;

  for (const field of ["eyebrow", "title", "ctaLabel"]) {
    applyTranslationSource(data.recruitment, field, `${field}All`);
  }

  return data;
};

const imageFields = [
  {
    name: "image",
    label: "Ảnh từ thư viện",
    type: "relationship",
    relationTo: "media",
    admin: {
      description: "Ảnh chính nên dùng trên website, chọn từ thư viện media."
    }
  },
  {
    name: "imageUrl",
    label: "Đường dẫn ảnh dự phòng",
    type: "text",
    admin: {
      description: "Dùng cho ảnh có sẵn trong thư mục public hoặc ảnh bên ngoài."
    }
  },
  {
    name: "imageAlt",
    label: "Mô tả ảnh",
    type: "text",
    localized: true
  }
] as any[];

const s3Enabled = Boolean(process.env.S3_BUCKET && process.env.S3_REGION && process.env.S3_ACCESS_KEY_ID && process.env.S3_SECRET_ACCESS_KEY);
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not configured. Set an external Postgres connection string in the deployment environment.");
}

export default buildConfig({
  admin: {
    user: "users"
  },
  i18n: {
    fallbackLanguage: "vi",
    supportedLanguages: {
      vi
    }
  },
  localization: {
    defaultLocale: "vi",
    fallback: true,
    locales: [
      { code: "vi", label: "Tiếng Việt" },
      { code: "en", label: "English" },
      { code: "ja", label: "日本語" }
    ]
  },
  collections: [
    {
      slug: "users",
      labels: {
        plural: "Tài khoản quản trị",
        singular: "Tài khoản quản trị"
      },
      auth: true,
      admin: {
        defaultColumns: ["email", "role", "updatedAt"],
        useAsTitle: "email"
      },
      access: {
        create: isAdmin,
        delete: isAdmin,
        read: isEditor,
        update: isAdmin
      },
      fields: [
        {
          name: "role",
          label: "Vai trò",
          type: "select",
          defaultValue: "editor",
          options: [
            { label: "Quản trị viên", value: "admin" },
            { label: "Biên tập viên", value: "editor" }
          ],
          required: true
        }
      ]
    },
    {
      slug: "media",
      labels: {
        plural: "Thư viện media",
        singular: "Tệp media"
      },
      admin: {
        defaultColumns: ["filename", "alt", "updatedAt"],
        useAsTitle: "alt"
      },
      access: {
        create: isEditor,
        delete: isAdmin,
        read: () => true,
        update: isEditor
      },
      upload: {
        staticDir: path.resolve(dirname, "public/cms"),
        mimeTypes: ["image/*", "application/pdf", "video/mp4"]
      },
      fields: [
        {
          name: "alt",
          label: "Mô tả ảnh/tệp",
          type: "text",
          required: true
        },
        {
          name: "caption",
          label: "Chú thích",
          type: "textarea"
        }
      ]
    },
    {
      slug: "recruitment-tabs",
      labels: {
        plural: "Nhóm tuyển dụng",
        singular: "Nhóm tuyển dụng"
      },
      admin: {
        defaultColumns: ["displayName", "kind", "sortOrder", "_status"],
        description: "Quản lý các tab tuyển dụng và thẻ tuyển sinh hàng không hiển thị trên trang chủ.",
        group: "Tuyển dụng",
        useAsTitle: "displayName"
      },
      access: {
        create: isEditor,
        delete: isAdmin,
        read: publishedOrEditor,
        update: isEditor
      },
      hooks: {
        beforeValidate: [syncRecruitmentTabLanguages],
        afterChange: [revalidateFrontend],
        afterDelete: [revalidateFrontend]
      },
      versions: {
        drafts: true
      },
      fields: [
        {
          ...languageText({
            name: "labelAll",
            label: "Tên nhóm hiển thị",
            required: true
          })
        },
        hiddenLegacyField({
          name: "displayName",
          label: "Tên nhóm cho danh sách chọn",
          type: "text"
        }),
        hiddenLegacyField({
          name: "label",
          label: "Tên nhóm hiển thị",
          type: "text",
          localized: true,
          required: true
        }),
        {
          name: "kind",
          label: "Loại nội dung",
          type: "select",
          defaultValue: "jobs",
          options: [
            { label: "Đơn hàng tuyển dụng", value: "jobs" },
            { label: "Thẻ tuyển sinh hàng không", value: "aviation" }
          ],
          required: true
        },
        {
          name: "sortOrder",
          label: "Thứ tự hiển thị",
          type: "number",
          defaultValue: 0,
          required: true
        },
        {
          name: "aviationCards",
          label: "Nội dung tuyển sinh hàng không",
          type: "array",
          admin: {
            condition: (_, siblingData) => siblingData?.kind === "aviation"
          },
          fields: [
            {
              ...languageText({
                name: "titleAll",
                label: "Tiêu đề",
                required: true
              })
            },
            hiddenLegacyField({
              name: "title",
              label: "Tiêu đề",
              type: "text",
              localized: true,
              required: true
            }),
            {
              name: "wide",
              label: "Hiển thị thẻ rộng",
              type: "checkbox",
              defaultValue: false
            },
            {
              name: "items",
              label: "Các dòng nội dung",
              type: "array",
              fields: [
                {
                  ...languageText({
                    name: "textAll",
                    label: "Nội dung",
                    required: true
                  })
                },
                hiddenLegacyField({
                  name: "text",
                  label: "Nội dung",
                  type: "text",
                  localized: true,
                  required: true
                })
              ]
            }
          ]
        }
      ]
    },
    {
      slug: "job-orders",
      labels: {
        plural: "Đơn hàng tuyển dụng",
        singular: "Đơn hàng tuyển dụng"
      },
      admin: {
        defaultColumns: ["title", "field", "market", "interviewDate", "_status"],
        description: "Chỉnh sửa nội dung từng thẻ tuyển dụng đang hiển thị trên trang chủ.",
        group: "Tuyển dụng",
        useAsTitle: "title"
      },
      access: {
        create: isEditor,
        delete: isAdmin,
        read: publishedOrEditor,
        update: isEditor
      },
      hooks: {
        beforeValidate: [syncJobOrderLanguages],
        afterChange: [revalidateFrontend],
        afterDelete: [revalidateFrontend]
      },
      versions: {
        drafts: true
      },
      fields: [
        {
          name: "tab",
          label: "Nhóm tuyển dụng",
          type: "relationship",
          relationTo: "recruitment-tabs",
          filterOptions: () => ({
            kind: {
              equals: "jobs"
            }
          }),
          admin: {
            allowCreate: true,
            allowEdit: true,
            appearance: "drawer"
          },
          maxDepth: 1,
          required: true
        },
        {
          ...languageText({
            name: "titleAll",
            label: "Tiêu đề tuyển dụng",
            required: true
          })
        },
        hiddenLegacyField({
          name: "title",
          label: "Tiêu đề tuyển dụng",
          type: "text",
          localized: true,
          required: true
        }),
        {
          ...languageText({
            name: "fieldAll",
            label: "Ngành nghề",
            required: true
          })
        },
        hiddenLegacyField({
          name: "field",
          label: "Ngành nghề",
          type: "text",
          localized: true,
          required: true
        }),
        ...imageFields,
        {
          ...languageText({
            name: "imageAltAll",
            label: "Mô tả ảnh",
            required: true
          })
        },
        {
          ...languageText({
            name: "marketAll",
            label: "Thị trường",
            required: true
          })
        },
        hiddenLegacyField({
          name: "market",
          label: "Thị trường",
          type: "text",
          localized: true,
          required: true
        }),
        {
          name: "quantity",
          label: "Số lượng",
          type: "text",
          required: true
        },
        {
          ...languageText({
            name: "salaryAll",
            label: "Mức lương",
            required: true
          })
        },
        hiddenLegacyField({
          name: "salary",
          label: "Mức lương",
          type: "text",
          localized: true,
          required: true
        }),
        {
          ...languageText({
            name: "locationAll",
            label: "Địa điểm",
            required: true
          })
        },
        hiddenLegacyField({
          name: "location",
          label: "Địa điểm",
          type: "text",
          localized: true,
          required: true
        }),
        {
          name: "interviewDate",
          label: "Ngày phỏng vấn",
          type: "date",
          admin: {
            date: {
              pickerAppearance: "dayOnly"
            }
          }
        },
        {
          ...languageText({
            name: "interviewDateLabelAll",
            label: "Ngày phỏng vấn hiển thị"
          })
        },
        hiddenLegacyField({
          name: "interviewDateLabel",
          label: "Ngày phỏng vấn hiển thị",
          type: "text",
          localized: true,
          admin: {
            description: "Dùng để giữ định dạng ngày tiếng Việt như 29/05/2026."
          }
        }),
        {
          name: "sortOrder",
          label: "Thứ tự hiển thị",
          type: "number",
          defaultValue: 0,
          required: true
        }
      ]
    },
    {
      slug: "leads",
      labels: {
        plural: "Yêu cầu tư vấn",
        singular: "Yêu cầu tư vấn"
      },
      admin: {
        defaultColumns: ["name", "email", "sector", "status", "createdAt"],
        useAsTitle: "name"
      },
      access: {
        create: isEditor,
        delete: isAdmin,
        read: isEditor,
        update: isEditor
      },
      fields: [
        {
          name: "name",
          label: "Họ và tên",
          type: "text",
          required: true
        },
        {
          name: "telephone",
          label: "Số điện thoại",
          type: "text"
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true
        },
        {
          name: "sector",
          label: "Thị trường quan tâm",
          type: "text",
          required: true
        },
        {
          name: "message",
          label: "Nội dung cần hỗ trợ",
          type: "textarea",
          required: true
        },
        {
          name: "sourcePage",
          label: "Trang gửi form",
          type: "text"
        },
        {
          name: "status",
          label: "Trạng thái xử lý",
          type: "select",
          defaultValue: "new",
          options: [
            { label: "Mới", value: "new" },
            { label: "Đã liên hệ", value: "contacted" },
            { label: "Tiềm năng", value: "qualified" },
            { label: "Đã hoàn tất", value: "closed" }
          ],
          required: true
        },
        {
          name: "notes",
          label: "Ghi chú nội bộ",
          type: "textarea"
        }
      ]
    }
  ],
  db: postgresAdapter({
    pool: {
      connectionString: databaseUrl
    }
  }),
  editor: lexicalEditor(),
  globals: [
    {
      slug: "site-settings",
      label: "Thiết lập website",
      access: {
        read: () => true,
        update: isEditor
      },
      hooks: {
        beforeValidate: [syncHomePageLanguages],
        afterChange: [revalidateFrontend]
      },
      versions: {
        drafts: true
      },
      fields: [
        {
          name: "companyName",
          label: "Tên công ty",
          type: "text",
          localized: true,
          required: true
        },
        {
          name: "address",
          label: "Địa chỉ",
          type: "text",
          localized: true
        },
        {
          name: "phones",
          label: "Số điện thoại",
          type: "array",
          fields: [
            {
              name: "label",
              label: "Nhãn",
              type: "text"
            },
            {
              name: "number",
              label: "Số điện thoại",
              type: "text",
              required: true
            }
          ]
        },
        {
          name: "labels",
          label: "Nhãn giao diện header/footer",
          type: "group",
          fields: [
            { name: "hotlineSupport", label: "Nhãn hotline hỗ trợ", type: "text", localized: true },
            { name: "mobileConsultationCta", label: "Nút tư vấn menu mobile", type: "text", localized: true },
            { name: "companyInfo", label: "Nhãn thông tin công ty", type: "text", localized: true },
            { name: "address", label: "Nhãn địa chỉ", type: "text", localized: true },
            { name: "phone", label: "Nhãn điện thoại", type: "text", localized: true },
            { name: "email", label: "Nhãn email", type: "text", localized: true },
            { name: "taxCode", label: "Nhãn mã số thuế", type: "text", localized: true },
            { name: "socialLinks", label: "Nhãn liên kết mạng xã hội", type: "text", localized: true },
            { name: "certifications", label: "Nhãn chứng nhận và giấy phép", type: "text", localized: true },
            { name: "copyright", label: "Dòng bản quyền", type: "text", localized: true }
          ]
        },
        {
          name: "email",
          label: "Email công ty",
          type: "email"
        },
        {
          name: "taxCode",
          label: "Mã số thuế",
          type: "text",
          localized: true
        },
        {
          name: "logoUrl",
          label: "Đường dẫn logo",
          type: "text"
        },
        {
          name: "facebookUrl",
          label: "Link Facebook",
          type: "text"
        },
        {
          name: "tiktokUrl",
          label: "Link TikTok",
          type: "text"
        },
        {
          name: "facebookEmbedUrl",
          label: "Link nhúng Facebook",
          type: "textarea"
        },
        {
          name: "footerNote",
          label: "Ghi chú dưới khung Facebook",
          type: "textarea",
          localized: true
        },
        {
          name: "footerInfoItems",
          label: "Thông tin bổ sung trong khối footer",
          type: "array",
          admin: {
            description: "Thêm các dòng thông tin mới vào khối thông tin công ty trong footer."
          },
          fields: [
            {
              name: "label",
              label: "Nhãn",
              type: "text",
              localized: true
            },
            {
              name: "value",
              label: "Nội dung",
              type: "text",
              localized: true,
              required: true
            },
            {
              name: "url",
              label: "Đường dẫn khi bấm vào",
              type: "text"
            }
          ]
        },
        {
          name: "certifications",
          label: "Chứng nhận & giấy phép",
          type: "array",
          fields: [
            {
              name: "title",
              label: "Tiêu đề",
              type: "text",
              localized: true,
              required: true
            },
            ...imageFields,
            {
              name: "url",
              label: "Đường dẫn khi bấm vào",
              type: "text"
            }
          ]
        },
        {
          name: "floatingContact",
          label: "Nút liên hệ nổi",
          type: "group",
          fields: [
            { name: "label", label: "Dòng mô tả", type: "text", localized: true },
            { name: "cta", label: "Nút kêu gọi", type: "text", localized: true },
            { name: "phone", label: "Số điện thoại", type: "text" },
            { name: "url", label: "Link Zalo/liên hệ", type: "text" }
          ]
        },
        {
          name: "seo",
          label: "SEO mặc định",
          type: "group",
          fields: [
            { name: "title", label: "Tiêu đề SEO", type: "text", localized: true },
            { name: "description", label: "Mô tả SEO", type: "textarea", localized: true },
            {
              name: "keywords",
              label: "Từ khóa SEO",
              type: "array",
              localized: true,
              fields: [{ name: "keyword", label: "Từ khóa", type: "text", localized: true }]
            }
          ]
        }
      ]
    },
    {
      slug: "navigation",
      label: "Thanh điều hướng",
      access: {
        read: () => true,
        update: isEditor
      },
      hooks: {
        afterChange: [revalidateFrontend]
      },
      versions: {
        drafts: true
      },
      fields: [
        {
          name: "links",
          label: "Liên kết menu chính",
          type: "array",
          localized: true,
          fields: [
            { name: "href", label: "Đường dẫn", type: "text", required: true },
            { name: "label", label: "Tên hiển thị", type: "text", localized: true, required: true }
          ]
        },
        {
          name: "languages",
          label: "Ngôn ngữ",
          type: "array",
          fields: [
            { name: "label", label: "Tên ngôn ngữ", type: "text", localized: true, required: true },
            { name: "href", label: "Đường dẫn", type: "text", required: true },
            { name: "flagUrl", label: "Đường dẫn cờ", type: "text" }
          ]
        }
      ]
    },
    {
      slug: "home-page",
      label: "Trang chủ",
      access: {
        read: () => true,
        update: isEditor
      },
      hooks: {
        afterChange: [revalidateFrontend]
      },
      versions: {
        drafts: true
      },
      fields: [
        {
          name: "hero",
          label: "Khối mở đầu",
          type: "group",
          fields: [
            { name: "eyebrow", label: "Nhãn nhỏ", type: "text", localized: true },
            { name: "title", label: "Tiêu đề chính", type: "text", localized: true, required: true },
            { name: "backgroundImageUrl", label: "Ảnh nền", type: "text" },
            {
              name: "leadLines",
              label: "Dòng mô tả",
              type: "array",
              localized: true,
              fields: [{ name: "text", label: "Nội dung", type: "text", localized: true }]
            },
            {
              name: "actions",
              label: "Nút kêu gọi hành động",
              type: "array",
              localized: true,
              fields: [
                { name: "label", label: "Tên nút", type: "text", localized: true, required: true },
                { name: "href", label: "Đường dẫn", type: "text", required: true },
                {
                  name: "style",
                  label: "Kiểu nút",
                  type: "select",
                  defaultValue: "primary",
                  options: [
                    { label: "Nút chính", value: "primary" },
                    { label: "Nút sáng", value: "light" }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "overview",
          label: "Tổng quan Tracodi Labour",
          type: "group",
          fields: [
            { name: "eyebrow", label: "Nhãn nhỏ", type: "text", localized: true },
            { name: "title", label: "Tiêu đề", type: "text", localized: true, required: true },
            { name: "intro", label: "Đoạn giới thiệu ngắn", type: "textarea", localized: true },
            {
              name: "body",
              label: "Nội dung mô tả",
              type: "array",
              localized: true,
              fields: [{ name: "text", label: "Đoạn văn", type: "textarea", localized: true }]
            },
            {
              name: "images",
              label: "Ảnh tổng quan",
              type: "array",
              fields: imageFields
            },
            {
              name: "metrics",
              label: "Chỉ số nổi bật",
              type: "array",
              localized: true,
              fields: [
                { name: "value", label: "Giá trị", type: "text", required: true },
                { name: "label", label: "Nhãn", type: "text", localized: true, required: true },
                { name: "stars", label: "Hiển thị biểu tượng sao", type: "checkbox", defaultValue: false }
              ]
            },
            { name: "videoUrl", label: "Video giới thiệu", type: "text" },
            { name: "videoPosterUrl", label: "Ảnh đại diện video", type: "text" },
            { name: "processImageUrl", label: "Ảnh quy trình", type: "text" },
            { name: "processImageAlt", label: "Mô tả ảnh quy trình", type: "text", localized: true }
          ]
        },
        {
          name: "markets",
          label: "Thị trường",
          type: "group",
          fields: [
            { name: "eyebrow", label: "Nhãn nhỏ", type: "text", localized: true },
            { name: "title", label: "Tiêu đề", type: "text", localized: true, required: true },
            {
              name: "cards",
              label: "Thẻ thị trường",
              type: "array",
              localized: true,
              fields: [
                { name: "region", label: "Tên thị trường", type: "text", localized: true, required: true },
                ...imageFields,
                { name: "description", label: "Mô tả", type: "textarea", localized: true }
              ]
            },
            { name: "ctaTitle", label: "Tiêu đề khối tư vấn", type: "textarea", localized: true },
            { name: "ctaText", label: "Nội dung khối tư vấn", type: "textarea", localized: true },
            { name: "ctaLabel", label: "Tên nút tư vấn", type: "text", localized: true },
            { name: "ctaHref", label: "Đường dẫn nút tư vấn", type: "text" }
          ]
        },
        {
          name: "recruitment",
          label: "Tuyển dụng",
          type: "group",
          fields: [
            {
              ...languageText({
                name: "eyebrowAll",
                label: "Nhãn nhỏ"
              })
            },
            hiddenLegacyField({ name: "eyebrow", label: "Nhãn nhỏ", type: "text", localized: true }),
            {
              ...languageText({
                name: "titleAll",
                label: "Tiêu đề",
                required: true
              })
            },
            hiddenLegacyField({ name: "title", label: "Tiêu đề", type: "text", localized: true, required: true }),
            {
              ...languageText({
                name: "ctaLabelAll",
                label: "Tên nút ứng tuyển"
              })
            },
            hiddenLegacyField({ name: "ctaLabel", label: "Tên nút ứng tuyển", type: "text", localized: true }),
            { name: "ctaHref", label: "Đường dẫn nút ứng tuyển", type: "text" },
            {
              name: "jobDetailLabels",
              label: "Nhãn thông tin đơn hàng",
              type: "group",
              fields: [
                { name: "quantity", label: "Nhãn số lượng", type: "text", localized: true },
                { name: "salary", label: "Nhãn lương", type: "text", localized: true },
                { name: "location", label: "Nhãn địa chỉ", type: "text", localized: true },
                { name: "interview", label: "Nhãn phỏng vấn", type: "text", localized: true }
              ]
            }
          ]
        },
        {
          name: "academy",
          label: "Đào tạo & quy trình",
          type: "group",
          fields: [
            { name: "eyebrow", label: "Nhãn nhỏ", type: "text", localized: true },
            { name: "title", label: "Tiêu đề", type: "text", localized: true, required: true },
            { name: "lead", label: "Đoạn dẫn", type: "textarea", localized: true },
            {
              name: "checklist",
              label: "Danh sách nội dung đào tạo",
              type: "array",
              localized: true,
              fields: [{ name: "text", label: "Nội dung", type: "text", localized: true }]
            },
            {
              name: "visuals",
              label: "Ảnh đào tạo",
              type: "array",
              fields: imageFields
            },
            { name: "modulesTitle", label: "Tiêu đề quy trình", type: "text", localized: true },
            {
              name: "modules",
              label: "Các bước quy trình",
              type: "array",
              localized: true,
              fields: [
                { name: "title", label: "Tên bước", type: "text", localized: true, required: true },
                { name: "description", label: "Mô tả bước", type: "textarea", localized: true }
              ]
            }
          ]
        },
        {
          name: "contactCta",
          label: "Khối đăng ký tư vấn",
          type: "group",
          fields: [
            { name: "eyebrow", label: "Nhãn nhỏ", type: "text", localized: true },
            {
              name: "titleLines",
              label: "Dòng tiêu đề",
              type: "array",
              localized: true,
              fields: [{ name: "text", label: "Nội dung", type: "text", localized: true }]
            },
            {
              name: "formLabels",
              label: "Nhãn và thông báo biểu mẫu",
              type: "group",
              fields: [
                { name: "name", label: "Nhãn họ và tên", type: "text", localized: true },
                { name: "telephone", label: "Nhãn số điện thoại", type: "text", localized: true },
                { name: "email", label: "Nhãn email", type: "text", localized: true },
                { name: "sector", label: "Nhãn chương trình", type: "text", localized: true },
                { name: "message", label: "Nhãn nội dung", type: "text", localized: true },
                { name: "submit", label: "Nút gửi", type: "text", localized: true },
                { name: "submitting", label: "Nút đang gửi", type: "text", localized: true },
                { name: "requiredError", label: "Lỗi thiếu thông tin", type: "textarea", localized: true },
                { name: "invalidEmailError", label: "Lỗi email không hợp lệ", type: "textarea", localized: true },
                { name: "submitStatus", label: "Thông báo đang gửi", type: "textarea", localized: true },
                { name: "successMessage", label: "Thông báo thành công", type: "textarea", localized: true },
                { name: "genericError", label: "Thông báo lỗi chung", type: "textarea", localized: true }
              ]
            }
          ]
        }
      ]
    }
  ],
  plugins: [
    s3Storage({
      bucket: process.env.S3_BUCKET || "tracodi-placeholder",
      collections: {
        media: true
      },
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "local",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "local"
        },
        endpoint: process.env.S3_ENDPOINT,
        forcePathStyle: Boolean(process.env.S3_FORCE_PATH_STYLE),
        region: process.env.S3_REGION || "auto"
      },
      disableLocalStorage: s3Enabled,
      enabled: s3Enabled
    })
  ],
  secret: process.env.PAYLOAD_SECRET || "development-secret-change-me",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts")
  }
});

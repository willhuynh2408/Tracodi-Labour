import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap"
});

export const metadata = {
  title: "Tracodi Labour | Công ty Cổ phần Xuất khẩu Lao động Tracodi",
  description:
    "Tracodi Labour cung cấp dịch vụ xuất khẩu lao động tuân thủ cho các nhà tuyển dụng trong lĩnh vực xây dựng, chăm sóc, sản xuất và logistics với quy trình tuyển dụng, đào tạo và hỗ trợ triển khai chuẩn mực.",
  keywords: [
    "xuất khẩu lao động",
    "di chuyển lao động",
    "tuyển dụng",
    "triển khai lao động",
    "nhân sự xây dựng",
    "nhân sự sản xuất"
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Tracodi Labour | Công ty Cổ phần Xuất khẩu Lao động Tracodi",
    description:
      "Chương trình di chuyển lao động có cấu trúc dành cho nhà tuyển dụng và người lao động trong các lĩnh vực công nghiệp, chăm sóc, sản xuất và logistics.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tracodi Labour | Công ty Cổ phần Xuất khẩu Lao động Tracodi",
    description:
      "Dịch vụ xuất khẩu lao động có cấu trúc với kiến trúc ứng dụng Next.js dễ bảo trì."
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b90014"
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${plusJakartaSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

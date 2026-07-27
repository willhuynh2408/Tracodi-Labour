const DEFAULT_ZALO_PHONE = "0963222837";

export function phoneDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

export function phoneHref(value) {
  const dialable = String(value || "").replace(/[^\d+]/g, "");
  return dialable ? `tel:${dialable}` : "#contact";
}

export function zaloHrefForPhone(value, fallback = DEFAULT_ZALO_PHONE) {
  const digits = phoneDigits(value) || phoneDigits(fallback);
  return `https://zalo.me/${digits}`;
}

export function isSamePhone(left, right) {
  const leftDigits = phoneDigits(left);
  const rightDigits = phoneDigits(right);
  return Boolean(leftDigits && rightDigits && leftDigits === rightDigits);
}

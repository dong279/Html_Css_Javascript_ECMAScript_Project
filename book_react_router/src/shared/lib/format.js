export const DASH = "-";

export function formatPrice(price) {
  if (price === null || price === undefined) {
    return DASH;
  }

  return `₩${Number(price).toLocaleString("ko-KR")}`;
}

export function withFallback(value, fallback = DASH) {
  if (value === null || value === undefined || value === "") {
    return fallback;
  }

  return value;
}

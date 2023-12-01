const arbitraryLocale = "en-US";

export function formatDate(date: Date) {
  return date.toLocaleString(arbitraryLocale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export function dateFormatter(date) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

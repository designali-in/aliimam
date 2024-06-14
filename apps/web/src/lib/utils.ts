export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}
export function formatDate(input: string | number): string {
    const date = new Date(input)
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }
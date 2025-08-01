export const formatNotesDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-based
  const dd = String(date.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

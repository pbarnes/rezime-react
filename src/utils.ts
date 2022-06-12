export function formatDate(datetime: number | null, yearOnly = false) {
    if (!datetime) {
      return 'Present'
    }
    const date = new Date(datetime)
    return yearOnly ?
      date.toLocaleDateString('en-us', { year: "numeric" }) :
      date.toLocaleDateString('en-us', { month: 'short', year: "numeric" })
  }
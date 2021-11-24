export const getDisabledMonthData = (date, selectedDate) => {
  if (!date) {
    return false
  }

  return (
    selectedDate.month() === date.month() && selectedDate.year() === date.year()
  )
}

export const checkDateRange = {
  isBetween: (date, start, end) => date.isBetween(start, end),
  isAfter: (date, start) => date.isAfter(start),
  isBefore: (date, _, end) => date.isBefore(end),
}

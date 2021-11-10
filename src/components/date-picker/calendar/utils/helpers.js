export const getDisabledMonthData = (date, selectedDate) => {
  if (!date) {
    return false
  }

  return (
    selectedDate.month() === date.month() && selectedDate.year() === date.year()
  )
}

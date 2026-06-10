export const formatDate = (date) => {
  return date ? new Date(date)
      .toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    : 'No date'
}

export const formatNoteDate = (date) => {
  return date ? new Date(date)
    .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : 'No date'
}
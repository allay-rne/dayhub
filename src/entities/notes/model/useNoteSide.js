

const useNotesSide = (notes) => {

  const allNotes = notes.length
  const favoriteNotes = notes.filter((note) => note.isFavorite === true).length
  const tagsNote = notes.filter((note) => note.tags?.length > 0).length

  return {
    allNotes,
    favoriteNotes,
    tagsNote,
  }
}

export default useNotesSide
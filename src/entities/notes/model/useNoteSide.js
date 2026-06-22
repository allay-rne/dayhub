const useNotesSide = (notes) => {

  const allNotes = notes.filter((note) => !note.isDeleted).length
  const favoriteNotes = notes.filter((note) => note.isFavorite && !note.isDeleted === true).length
  const tagsNote = notes.filter((note) => note.tags?.length > 0).length
  const trashNote = notes.filter((note) => note?.isDeleted).length

  return {
    allNotes,
    favoriteNotes,
    tagsNote,
    trashNote,
  }
}

export default useNotesSide
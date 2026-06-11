import {useCallback, useEffect, useMemo, useState} from "react";


const useNotes = () => {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [filter, setFilter] = useState('all')
  const [searchNotes, setSearchNotes] = useState('')

  const handleAddNotes = useCallback((newNotes) => {
    setNotes([newNotes, ...notes])
  }, [notes])
  const handleDeleteNotes = useCallback((id) => {
    setNotes(notes.map((note) => note.id === id ? {...note, isDeleted: true} : note))
  }, [notes])
  const handleToggleFavorite = useCallback((id) => {
    setNotes(notes.map((note) => note.id === id ? {...note, isFavorite: !note.isFavorite} : note))
  },[notes])
  const handleSearchChange = useCallback((search) => {
    setSearchNotes(search)
  },[])
  const handleFilterChange = useCallback((filterNote) => {
    setFilter(filterNote)
  }, [])
  const handleEditNotes = useCallback((updatedNote) => {
    setNotes(notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    ))
  }, [notes])
  const handleFullDeleteNote = useCallback((id) => {
    const isConfirmed = window.confirm('Удалить заметку навсегда?')
    if (isConfirmed) {
      setNotes(notes.filter((note) => note.id !== id))
    }
  }, [notes])
  const handleRestoreNote = useCallback((id) => {
        setNotes(notes.map((note) => note.id === id ? {...note, isDeleted: false} : note))
  }, [notes])

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
   filter === 'all' ? note.isDeleted !== true
      : filter === 'favorites' ? note.isFavorite && note.isDeleted !== true
       : filter === 'tags' ? note.tags?.length > 0 && note.isDeleted !== true
         : filter === 'trash' ? note.isDeleted === true
      : true
    )
  }, [notes, filter])
  const searchedNotes = useMemo(() => {
    return filteredNotes.filter((note) =>
    note.title.toLowerCase()
      .includes(searchNotes.trim().toLowerCase())
      )
  }, [searchNotes, filteredNotes])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);

  return {
    notes,
    searchedNotes,
    filter,
    handleAddNotes,
    handleDeleteNotes,
    handleFullDeleteNote,
    handleRestoreNote,
    handleToggleFavorite,
    handleSearchChange,
    handleFilterChange,
    handleEditNotes,
  }
}

export default useNotes
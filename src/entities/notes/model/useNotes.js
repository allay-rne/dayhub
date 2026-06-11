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

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
   filter === 'all' ? true
      : filter === 'favorites' ? note.isFavorite
       : filter === 'tags' ? note.tags?.length > 0
         /*     : filter === 'trash' ? note.trash*/
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
    handleToggleFavorite,
    handleSearchChange,
    handleFilterChange,
    handleEditNotes,
  }
}

export default useNotes
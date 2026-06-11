import React, {useCallback, useState} from "react";
import useNotes from "@/entities/notes/model/useNotes.js";
import Hero from "@/shared/ui/Hero/index.js";
import Button from "@/shared/ui/Button/index.js";
import Field from "@/shared/ui/Field/index.js";
import todoBanner from "@/shared/assets/image/Hero/notesLightHero.png";
import NoteItem from "@/entities/notes/ui/NoteItem/index.js";
import NoteSide from "@/widgets/NoteSide/index.js";
import Modal from "@/shared/ui/Modal/index.js";
import AddNote from "@/features/notes/AddNote/index.js";
import './Notes.scss'


const Notes = () => {

  const {
    filter,
    notes,
    searchedNotes,
    handleAddNotes,
    handleDeleteNotes,
    handleFullDeleteNote,
    handleRestoreNote,
    handleToggleFavorite,
    handleSearchChange,
    handleFilterChange,
    handleEditNotes,
  } = useNotes()

  const [openModal, setOpenModal] = useState(false)
  const  [selectedNote, setSelectedNote] = useState(null)


  const handleOpenModal = useCallback(()=> {
    setOpenModal(true)
  }, [])
  const handleCloseModal = useCallback(() => {
    setOpenModal(false)
    setSelectedNote(null)
  }, [])
  const handleEditNote = useCallback((note) => {
    setSelectedNote(note)
    setOpenModal(true)
  }, [])

  return (
    <>
      <Hero
        img={todoBanner}
        title="Notes"
        subtitle="Capture thoughts, ideas and everything in between"
      >
        <Button
          label="+ New note"
          onClick = {handleOpenModal}
        />
      </Hero>
      <section className="notes">
        <div className="notes__body">

          <NoteSide
            onFilterChange={handleFilterChange}
            activeFilter={filter}
            notes={notes}
          />

          <div className="notes__main">
              <Field
                className="notes__search"
                htmlFor="todo-filter"
                id="todo-filter"
                placeholder="Search your notes..."
                autoComplete="off"
                type="search"
                onChange={(event) => handleSearchChange(event.target.value)}
              />

            <main className="notes__list">
              {searchedNotes.length === 0
                ? <div className='notes__empty'>Nothing here yet..</div>
                : <ul className="notes-item__list"> {searchedNotes.map((note)=> (
                      <NoteItem
                        key={note.id}
                        id={note.id}
                        color={note.color}
                        title={note.title}
                        text={note.text}
                        date={note.date}
                        tags={note.tags}
                        isFavorite={note.isFavorite}
                        onDelete={handleDeleteNotes}
                        isDeleted={note.isDeleted}
                        onFullDelete={handleFullDeleteNote}
                        onRestore={handleRestoreNote}
                        onToggle={handleToggleFavorite}
                        onClick={() => handleEditNote(note)}
                      />
                    ))}
              </ul>
              }
            </main>
          </div>
        </div>
      </section>
      {openModal &&
        <Modal>
          <AddNote
            note={selectedNote}
            onClose={handleCloseModal}
            onSave={selectedNote ? handleEditNotes : handleAddNotes}          />
        </Modal>}
    </>

  )
}

export default Notes
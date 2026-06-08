import Button from "@/shared/ui/Button/index.js";
import todoBanner from "@/shared/assets/image/Hero/notesLightHero.png";
import Hero from "@/shared/ui/Hero/index.js";
import NoteItem from "@/entities/notes/ui/NoteItem/index.js";
import NoteSide from "@/widgets/NoteSide/index.js";
import Field from "@/shared/ui/Field/index.js";
import './Notes.scss'

const Notes = () => {

  const noteItem = [
    {
      id: "note-id-1",
      color: "light blue",
      title: "note-1",
      text: "This first note in Notes alallalalalalallalalalla ololoololololol",
      date: "May 27, 2026",
      isFavorite: true,
    },
    {
      id: "note-id-2",
      color: "light pink",
      title: "note-2",
      text: "This second note in Notes",
      date: "Jun 7, 2026",
      isFavorite: false,
    },
    {
      id: "note-id-3",
      color: "light red",
      title: "note-3",
      text: "This third note in Notes",
      date: "Oct 1, 2025",
      isFavorite: false,
    },

    {
      id: "note-id-4",
      color: "light blue",
      title: "note-4",
      text: "This first note in Notes alallalalalalallalalalla ololoololololol",
      date: "May 27, 2026",
      isFavorite: true,
    },
    {
      id: "note-id-5",
      color: "light pink",
      title: "note-5",
      text: "This second note in Notes",
      date: "Jun 7, 2026",
      isFavorite: false,
    },
    {
      id: "note-id-6",
      color: "light red",
      title: "note-6",
      text: "This third note in Notes",
      date: "Oct 1, 2025",
      isFavorite: false,
    },
  ]

  return (
    <>
      <Hero
        img={todoBanner}
        title="Notes"
        subtitle="Capture thoughts, ideas and everything in between"
      >
        <Button label="+ New note" />
      </Hero>
      <section className="notes">
        <div className="notes__body">

          <NoteSide />

          <div className="notes__main">
              <Field
                className="notes__search"
                htmlFor="todo-filter"
                id="todo-filter"
                placeholder="Search your notes..."
                autoComplete="off"
                type="search"
              />

            <main className="notes__list">
              <ul className="notes-item__list">
                {noteItem.map(({
                                 id,
                                 color,
                                 title,
                                 text,
                                 date,
                                 isFavorite,
                               }) => (
                  <NoteItem
                    key={id}
                    id={id}
                    color={color}
                    title={title}
                    text={text}
                    date={date}
                    isFavorite={isFavorite}
                  />
                ))}
              </ul>
            </main>
          </div>


        </div>
      </section>
    </>

  )
}

export default Notes
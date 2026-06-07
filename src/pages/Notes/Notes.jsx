import Button from "@/shared/ui/Button/index.js";
import todoBanner from "@/shared/assets/image/Hero/notesLightHero.png";
import Hero from "@/shared/ui/Hero/index.js";
import Icon from "@/shared/ui/Icon/index.js";
import Field from "@/shared/ui/Field/index.js";
import flowerImg from '@/shared/assets/image/flower.png'

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

  const notesFilter= [
    {
      icon: "notes",
      title: "All notes",
      number: 6,
    },
    {
      icon: "star",
      title: "Favorites",
      number: 2,
    },
    {
      icon: "tags",
      title: "Tags",
      number: 0,
    },
    {
      icon: "trash",
      title: "Trash",
      number: 0,
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

          <aside className="notes-filter">
            <ul className="notes-filter__list">
              {notesFilter.map(({icon, title, number})=>(
                <li
                  className="notes-filter__item"
                  key={title}
                >
                  <div className="notes-filter__title">
                    <Icon name={icon} />
                    {title}
                  </div>
                  {number}
                </li>
              ))}
            </ul>
            <div className="notes-filter__motivation">
              <img src={flowerImg} alt="motivation" />
              <div className="notes-filter__motivation-right">
              <p>Write it down today, thank yourself tomorrow.</p>
                <Icon name="hearth" />
                </div>
            </div>
          </aside>

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
                  <li
                    className="notes-item__item"
                    key={id}
                  >
                    <div className="notes-item__header">
                      <div className="notes-item__left">
                  <span
                    className="notes-item__color"
                    style={{backgroundColor: "#a8c5da"}}
                  />
                        <h2 className='notes-item__title'>{title}</h2>
                      </div>
                      <div className="notes-item__actions">
                        <Button
                          iconName='pencil'
                          iconPosition="after"
                          mode="transparent"
                          isLabelHidden
                          label="Edit"
                        />
                        <Button
                          iconName="close"
                          iconPosition="after"
                          mode="transparent"
                          isLabelHidden
                          label="Delete"
                        />
                      </div>
                    </div>
                    <p className="notes-item__text">{text}</p>
                    <div className="notes-item__footer">
                      <data>{date}</data>
                      <Icon
                        name="star"
                        isFavorite
                      />
                    </div>

                  </li>
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
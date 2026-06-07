import './NoteItem.scss'
import classNames from 'classnames'

const NoteItem = (props) => {


  return (
      <ul className="notes-filter__list">
        {noteItem.map(({...noteItem}) => {
         return
          <li
            className="notes-filter__item"
          ></li>
        })}
      </ul>
  )
}

export default NoteItem
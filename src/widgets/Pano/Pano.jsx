import './Pano.scss'
import classNames from 'classnames'

const Pano = () => {
  const titleId = 'pano-title'
  return (
    <section className="pano" aria-label={titleId}>
      <div className="pano__body">
        <div className="pano__inner container">
          <h1 className="pano__title" id={titleId}>
            My ToDo list
          </h1>
          <div className="pano__description">
            <p>
              Order in affairs is the result in life
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pano
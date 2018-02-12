import React from 'react'

import './styles.scss'

const Tile = props => {
  const { title, subtitle, children, noPadding } = props
  const paddingClass = noPadding ? 'p-0' : ''
  return (
    <section className="tile bm-tile">
      <div className="tile-header dvd dvd-btm">
        <h1 className="custom-font">
          <strong>{title}</strong> {subtitle}
        </h1>
      </div>
      <div className={`tile-body ${paddingClass}`}>{children}</div>
    </section>
  )
}

export default Tile

import React from 'react'

import './styles.scss'

const Header = () => {
  return (
    <section id="header">
      <header className="clearfix">
        <div className="branding">
          <a className="brand" href="index.html">
            <span>
              <strong>MIN</strong>OVATE
            </span>
          </a>
          <a href="#" className="offcanvas-toggle visible-xs-inline">
            <i className="fa fa-bars" />
          </a>
        </div>
      </header>
    </section>
  )
}

export default Header

import React from 'react'

import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

export default WrappedComponent => {
  const PageComponent = () => (
    <div id="wrap">
      <Header />
      <Sidebar />
      <section id="content">
        <div className="page ">
          <WrappedComponent />
        </div>
      </section>
    </div>
  )
  return PageComponent
}

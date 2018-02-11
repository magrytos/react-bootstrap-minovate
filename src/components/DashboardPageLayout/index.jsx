import React from 'react'
import { connect } from 'react-redux'

import * as authSelectors from 'state/auth/selectors'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
})

export default WrappedComponent => {
  const PageComponent = props => {
    const { user } = props
    return (
      <div id="wrap">
        <Header />
        <Sidebar />
        <section id="content">
          <div className="page ">
            <WrappedComponent user={user} />
          </div>
        </section>
      </div>
    )
  }

  return connect(mapStateToProps)(PageComponent)
}

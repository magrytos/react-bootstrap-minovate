import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { logout } from 'state/auth/actions'
import * as authSelectors from 'state/auth/selectors'

import ProfileMenu from './profile-menu'

import './styles.scss'

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
})
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)

const Header = props => {
  const { user, logout } = props
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
        <ProfileMenu user={user} onLogout={logout} />
      </header>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

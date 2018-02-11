import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const initialState = {
  isOpen: false,
}

class ProfileMenu extends React.Component {
  constructor() {
    super()
    this.state = initialState
  }

  toggleProfileMenu = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state
    const { user, onLogout } = this.props
    const isOpenClassName = isOpen ? 'open' : ''
    const menuClass = user ? '' : 'bm-menuList-noUser'
    const profileButton = user ? (
      <Fragment>
        <img src="assets/images/profile-photo.jpg" alt="" className="img-circle size-30x30" />
        <span>
          {`${user.firstName} ${user.lastName}`}
          <i className="fa fa-angle-down" />
        </span>
      </Fragment>
    ) : (
      <i className="fa fa-user" />
    )
    return (
      <ul className="nav-right pull-right list-inline bm-profileMenu">
        <li onClick={this.toggleProfileMenu} className={`dropdown nav-profile ${isOpenClassName}`}>
          <a href className="dropdown-toggle" data-toggle="dropdown">
            {profileButton}
          </a>

          <ul className={`dropdown-menu animated littleFadeInRight ${menuClass}`} role="menu">
            {user && (
              <li>
                <a role="button" onClick={onLogout}>
                  <i className="fa fa-sign-out" />Wyloguj
                </a>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/login">
                  <i className="fa fa-sign-in" />
                  Zaloguj
                </Link>
              </li>
            )}
          </ul>
        </li>
      </ul>
    )
  }
}

export default ProfileMenu

import React from 'react'

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
    const isOpenClassName = isOpen ? 'open' : ''
    return (
      <ul className="nav-right pull-right list-inline">
        <li onClick={this.toggleProfileMenu} className={`dropdown nav-profile ${isOpenClassName}`}>
          <a href className="dropdown-toggle" data-toggle="dropdown">
            <img src="assets/images/profile-photo.jpg" alt="" className="img-circle size-30x30" />
            <span>
              John Douey
              <i className="fa fa-angle-down" />
            </span>
          </a>

          <ul className="dropdown-menu animated littleFadeInRight" role="menu">
            <li>
              <a href="#">
                <span className="badge bg-greensea pull-right">86%</span>
                <i className="fa fa-user" />Profile
              </a>
            </li>
            <li>
              <a href="#">
                <span className="label bg-lightred pull-right">new</span>
                <i className="fa fa-check" />Tasks
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-cog" />Settings
              </a>
            </li>
            <li className="divider" />
            <li>
              <a href="#">
                <i className="fa fa-lock" />Lock
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-sign-out" />Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    )
  }
}

export default ProfileMenu

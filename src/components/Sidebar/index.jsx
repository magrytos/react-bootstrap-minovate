import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

const LeftSideNavigation = () => (
  <div id="controls">
    <aside id="sidebar">
      <div id="sidebar-wrap">
        <div className="panel-group slim-scroll" role="tablist">
          <div className="panel panel-default">
            <div id="sidebarNav" className="panel-collapse collapse in" role="tabpanel">
              <div className="panel-body">
                <ul id="navigation">
                  <li>
                    <NavLink exact to="/">
                      <i className="fa fa-bar-chart-o" />
                      <span>Rynek</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/my-offers">
                      <i className="fa fa-envelope-o" />
                      <span>Moje oferty</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/deposit">
                      <i className="fa fa-list" />
                      <span>Zasilanie konta</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/withdrawals">
                      <i className="fa fa-list" />
                      <span>Wyplata srodkow</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/balance-history">
                      <i className="fa fa-shopping-cart" />
                      <span>Historia salda</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/about-us">
                      <i className="fa fa-table" />
                      <span>O nas</span>
                    </NavLink>
                  </li>
                  <li className="active">
                    <NavLink exact to="/contact">
                      <i className="fa fa-envelope-o" />
                      <span>Kontkat</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
)

export default LeftSideNavigation

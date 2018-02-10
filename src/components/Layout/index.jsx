import React from 'react'

import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Page from 'components/Page'

import './styles.scss'

const Layout = () => (
  <div id="wrap">
    <Header />
    <Sidebar />
    <Page />
  </div>
)

export default Layout

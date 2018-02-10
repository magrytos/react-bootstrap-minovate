import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

// vendor css files
import 'bootstrap/dist/css/bootstrap.css'
import './public/styles/font-awesome.min.css'
// minovate styles
import './styles.scss'

import Layout from './components/Layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    )
  }
}

export default App

import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

// vendor css files
import 'bootstrap/dist/css/bootstrap.css'
import './scss/font-awesome.css'
// minovate styles
import './scss/main.css'

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

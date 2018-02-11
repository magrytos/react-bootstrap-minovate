import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

// vendor css files
import 'bootstrap/dist/css/bootstrap.css'
import './public/styles/font-awesome.min.css'
// minovate styles
import './styles.scss'
import './bitmarket24.scss'
import './public/styles/form-elements.scss'
import './public/styles/buttons.scss'

import Page from './components/Page'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    )
  }
}

export default App

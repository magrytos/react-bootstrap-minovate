import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './state/store'
// vendor css files
import 'bootstrap/dist/css/bootstrap.css'
import './public/styles/vendor/font-awesome.min.css'
// minovate styles
import './public/styles/styles.scss'

import Page from './components/Page'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Page />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App

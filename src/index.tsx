import { GlobalStyle } from 'assets/styles'
import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

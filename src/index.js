import App from './App'
import GlobalStyles from './GlobalStyles'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

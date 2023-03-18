import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import React from 'react'
import ReactDOM from 'react-dom'

import './style/index.css'

import App from './pages/App'
import theme from './theme'

// Parcel HMR (ignore error)
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept(function () {
    window.location.reload();
  });
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

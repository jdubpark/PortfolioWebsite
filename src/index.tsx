import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import React from 'react'
import ReactDOM from 'react-dom'
import TagManager from 'react-gtm-module'

import './style/index.css'
import 'url:./assets/resume/Resume_Blockchain.pdf' // for saving to dist when building

import App from './pages/App'
import theme from './theme'

// Parcel HMR (ignore error)
// @ts-ignore
if (module.hot) module.hot.accept(() => window.location.reload())

const tagManagerArgs = {
  gtmId: 'GTM-N2F6BHR'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { LinkProps } from '@mui/material/Link'
import React from 'react'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '-apple-system',
    ].join(','),
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '14px',
          backgroundColor: 'rgba(30,30,30,0.8)',
        },
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#f3f4f6',
    },
    background: {
      default: '#f3f4f6',
      paper: '#fff',
      // dark: '',
    },
  },
})

export default responsiveFontSizes(theme)

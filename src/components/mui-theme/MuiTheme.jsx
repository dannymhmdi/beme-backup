'use client'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
    typography : {
        fontFamily : 'vazirFont'
    },
    direction: 'rtl'
})

const MuiTheme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default MuiTheme
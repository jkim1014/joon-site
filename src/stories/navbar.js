import React from 'react'
import { storiesOf } from '@storybook/react'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

storiesOf('NavigationBar', module).add('Navbar', () => (
  <ThemeProvider theme={theme}>
    <Navbar />
  </ThemeProvider>
))

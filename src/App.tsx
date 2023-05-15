import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { GithubDataContextProvider } from './contexts/GithubDataContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GithubDataContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GithubDataContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

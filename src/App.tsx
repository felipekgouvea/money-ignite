import { ThemeProvider } from 'styled-components'
import { GloblaStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { AppContainer, Wrapper } from './App'
import { Summary } from './components/Summary'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GloblaStyle />
      <div>
        <Header />
        <Wrapper>
          <AppContainer>
            <Summary />
          </AppContainer>
        </Wrapper>
      </div>
    </ThemeProvider>
  )
}

export default App

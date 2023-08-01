import { ThemeProvider } from 'styled-components'
import { GloblaStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { AppContainer, Wrapper } from './App'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GloblaStyle />
      <div>
        <Header />
        <Wrapper>
          <AppContainer></AppContainer>
        </Wrapper>
      </div>
    </ThemeProvider>
  )
}

export default App

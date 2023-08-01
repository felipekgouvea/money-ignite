import { ThemeProvider } from 'styled-components'
import { GloblaStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { Wrapper } from './App'
import { Transactions } from './pages/Transactions'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GloblaStyle />
      <div>
        <Header />
        <Wrapper>
          <Transactions />
        </Wrapper>
      </div>
    </ThemeProvider>
  )
}

export default App

import { ThemeProvider } from "styled-components";
import { GloblaStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GloblaStyle/>
      <h1>App React</h1>
    </ThemeProvider>
  )
}

export default App

import {ThemeProvider} from 'styled-components';
import {lightTheme} from '../src/utils/Themes.js';

function App() {
  
  return (
    <>
      <ThemeProvider theme={lightTheme}></ThemeProvider>
    </>
  )
}

export default App

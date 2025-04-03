import { createGlobalStyle } from 'styled-components'
import './App.css'
import { AppRoutes } from './routes/routes'

function App() {

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url("../src/assets/pokemons-wpp.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`

export default App

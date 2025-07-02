import { createGlobalStyle } from 'styled-components'
import './App.css'
import { AppRoutes } from './routes/routes'
import Header from './components/header'

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <AppRoutes />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url("/pokemons-wpp.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
`

export default App

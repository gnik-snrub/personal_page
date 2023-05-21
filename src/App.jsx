import { useState } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import './App.css'
import HeaderSvg from './components/HeaderSvg'
import ThemeSwitch from './components/ThemeSwitch'

function App() {
  const [themeType, setThemeType] = useState(light)

  const changeTheme = () => {
    if (themeType.label === 'dark') setThemeType(light)
    else setThemeType(dark)
  }

  return (
    <ThemeProvider theme={themeType}>
      <BG>
        <HeaderSvg mode={themeType.label} />
        <Header>
          <ThemeSwitch onClick={changeTheme} />
        </Header>
      </BG>
    </ThemeProvider>
  )
}

const BG = styled.div`
z-index: 0;
transition: 0.3s;
position: relative;
min-height: 100vh;
height: 100%;
width: 100vw;
display: grid;
grid-template-rows: 33vh auto;
align-items: center;
justify-items: center;
background-color: ${props => props.theme.bg};
`

const Header = styled.header`
`

const H = styled.h1`
margin: 0;
font-family: arial;
border: 25px solid ${props => props.theme.accent};
border-bottom: 0;
border-top: 0;
padding: 15px 40px;
color: ${props => props.theme.text}
`
`

`
const light = {
  label: "light",
  text: "#873582",
  bg: "#E4E7C1",
  buttonPrime: "#7FB9BD",
  buttonSecondary: "#557F82",
  accent: "#873582"
}

const dark = {
  label: "dark",
  text: "#873582",
  bg: "#2A222A",
  buttonPrime: "#7FB9BD",
  buttonSecondary: "#557F82",
  accent: "#873582"
}

export default App

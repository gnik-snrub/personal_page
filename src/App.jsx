import { useEffect, useRef, useState } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import './App.css'
import About from './components/About'
import CenterSvg from './components/CenterSvg'
import Contact from './components/Contact'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Projects from './components/Projects'

function App() {
  const [themeType, setThemeType] = useState(dark)
  const about = useRef(null)
  const projects= useRef(null)
  const contact = useRef(null)

  const changeTheme = () => {
    if (themeType.label === 'dark') setThemeType(light)
    else setThemeType(dark)
  }

  const toRef = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <ThemeProvider theme={themeType}>
      <BG>
        <LandingPage />
        <Header lightSwitch={changeTheme} navFunc={toRef} theme={themeType.label} refs={{about, projects, contact}} />
        <Main>
          <CenterSvg mode={themeType.label}/>
          <About innerRef={about}/>
          <Projects innerRef={projects}/>
          <Contact innerRef={contact}/>
        </Main>
      </BG>
    </ThemeProvider>
  )
}


const BG = styled.div`
z-index: 0;
transition: 0.5s;
position: relative;
min-height: 100vh;
height: 100%;
min-width: 100vw;
display: grid;
grid-template-rows: auto;
justify-items: center;
background-color: ${props => props.theme.bg};
`

const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
& * {
  color: ${props => props.theme.text};
}
& > section {
  font-family: arial;
  & button {
    margin: 5px;
    border: none;
    background-color: ${props => props.theme.buttonPrime};
    color: ${props => props.theme.bg};
  }
}
`

const light = {
  label: "light",
  text: "#873582",
  bg: "#E4E7C1",
  buttonPrime: "#873582",
  buttonSecondary: "#390040",
  accent: "#7FB9BD"
}

const dark = {
  label: "dark",
  text: "#7FB9BD",
  bg: "#2A222A",
  buttonPrime: "#7FB9BD",
  buttonSecondary: "#557F82",
  accent: "#873582"
}

export default App

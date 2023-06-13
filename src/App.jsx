import { useRef, useState } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import LandingPage from './components/LandingPage'

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
          <Anchor ref={about}/>
          <About />
          <Anchor ref={projects}/>
          <section id="projects" >
            <h2>My projects!</h2>
            <article id="pokemon">
              <h3>Pokemon</h3>
              <img id="demoGif" src='/Pokemon.gif' />
              <span>Brief explanation</span>
              <button>See it live</button>
              <button>See the repo</button>
            </article>
            <article id="storefront">
              <h3>Indie game storefront</h3>
              <img id="demoGif" src='/Storefront.gif' />
              <span>Brief explanation</span>
              <button>See it live</button>
              <button>See the repo</button>
            </article>
            <article id="weather">
              <h3>Weather app</h3>
              <img id="demoGif" src='/Weather.gif' />
              <span>Brief explanation</span>
              <button>See it live</button>
              <button>See the repo</button>
            </article>
          </section>
          <Anchor ref={contact}/>
          <section id="contact" >
            <h3>Contact me!</h3>
            <span>email here</span>
            <img id="github" />
            <img id="linkedin" />
            <img id="twitter" />
          </section>
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
padding-bottom: 25vh;
& * {
  color: ${props => props.theme.text};
  display: grid;
  place-items: center;
}
& > section {
  font-family: arial;
  width: 50%;
  & button {
    margin: 5px;
    border: none;
    background-color: ${props => props.theme.buttonPrime};
    color: ${props => props.theme.bg};
  }
}
`

const Anchor = styled.a`
margin-bottom: 25vh
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

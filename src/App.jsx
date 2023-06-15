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
              <img id="demoGif" src='/Pokemon.gif' />
              <h3>Where's that Pokemon</h3>
              <span>A Pokemon-themed web app which draws inspiration from 'Where's Wally' and the 'Who's that Pokemon' segment from the classic anime. Built using React, styled-components, a custom hook, while utilizing firebase as a backend to build a scoreboard.</span>
              <a href='https://gnik-snrub.github.io/where-is-wally' target='_blank' rel='noreferrer noopener'>View it live</a>
              <a href='https://github.com/gnik-snrub/where-is-wally' target='_blank' rel='noreferrer noopener'>Github repo</a>
            </article>
            <article id="storefront">
              <img id="demoGif" src='/Storefront.gif' />
              <h3>Indie Games 'r' Us</h3>
              <span>A captivating indie-game storefront concept using React and styled-components. Leveraging the power of react-router, I created seamless navigation using paths to showcase a variety of games, demonstrating my ability to create visually appealing interfaces and deliver intuitive user experiences.</span>
              <a href='https://gnik-snrub.github.io/shopping-cart' target='_blank' rel='noreferrer noopener'>View it live</a>
              <a href='https://github.com/gnik-snrub/shopping-cart' target='_blank' rel='noreferrer noopener'>Github repo</a>
            </article>
            <article id="weather">
              <img id="demoGif" src='/Weather.gif' />
              <h3>Weather app</h3>
              <span> A sleek and informative weather app drawing from the API from weatherapi.com. Seamlessly displays a variety of local weather conditions, and associated country for any user-queried city from around the world.</span>
              <a href='https://gnik-snrub.github.io/weather' target='_blank' rel='noreferrer noopener'>View it live</a>
              <a href='https://github.com/gnik-snrub/weather' target='_blank' rel='noreferrer noopener'>Github repo</a>
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

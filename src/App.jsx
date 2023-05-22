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
          <HeaderButton>About Me</HeaderButton>
          <HeaderButton>My Projects</HeaderButton>
          <HeaderButton>Contact Me</HeaderButton>
          <ThemeSwitch onClick={changeTheme} />
        </Header>
        <main>
          <section id="about">
            <h2>About me!</h2>
            <Image src="/public/Headshot.jpg"/>
            <span>Largely true information about me here</span>
          </section>
          <section id="projects">
            <h2>My projects!</h2>
            <article id="pokemon">
              <h3>Pokemon</h3>
              <img id="demoGif" src='/public/Pokemon.gif' />
              <span>Brief explanation</span>
              <button>See it live</button>
              <button>See the repo</button>
            </article>
            <article id="storefront">
              <h3>Indie game storefront</h3>
              <img id="demoGif" src='/public/Storefront.gif' />
              <span>Brief explanation</span>
              <button>See it live</button>
              <button>See the repo</button>
            </article>
            <article id="weather">
              <h3>Weather app</h3>
              <img id="demoGif" src='/public/Weather.gif' />
              <span>Brief explanation</span>
              <button>See it live</button>
              <button>See the repo</button>
            </article>
          </section>
          <section id="contact">
            <h3>Contact me!</h3>
            <span>email here</span>
            <img id="github" />
            <img id="linkedin" />
            <img id="twitter" />
          </section>
        </main>
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
display: grid;
grid-template-rows: 33vh auto;
align-items: center;
justify-items: center;
background-color: ${props => props.theme.bg};
`

const Header = styled.header`
position: relative;
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 30px 0px;
`

const HeaderButton = styled.button`
font-family: arial;
text-align: center;
flex: 1 0 22%;
padding: 10px 0px;
margin: 0px 80px;
border: none;
font-size: 28px;
color: ${props => props.theme.label === "dark" ? props.theme.buttonPrime : props.theme.accent};
background-color: ${props => props.theme.bg};
&:hover {
  color: ${props => props.theme.bg};
  background-color: ${props => props.theme.label === "dark" ? props.theme.buttonPrime : props.theme.accent};
  border-radius: 25px;
}
`

const Image = styled.img`
border: 5px solid ${props => props.theme.accent};
border-radius: 50%;
min-width: 250px;
max-height: 250px;
object-fit: cover;
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

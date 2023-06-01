import { useRef, useState } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import './App.css'
import HeaderSvg from './components/HeaderSvg'
import ThemeSwitch from './components/ThemeSwitch'

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
        <Header>
          <HeaderSvg mode={themeType.label} />
          <HeaderButton onClick={() => toRef(about)}>About Me</HeaderButton>
          <HeaderButton onClick={() => toRef(projects)}>My Projects</HeaderButton>
          <HeaderButton onClick={() => toRef(contact)}>Contact Me</HeaderButton>
          <ThemeSwitch onClick={changeTheme} />
        </Header>
        <Main>
          <Anchor ref={about}/>
          <section id="about" >
            <h2>Hi there, I'm Josiah Morris</h2>
            <Image src="/Headshot.jpg"/>
            <p>Dedicated to a life of learning, and the opportunities it brings. I am passionate about software development and the limitless possibilities it provides, as well as the challenges and personal growth created through its processes.</p>
          </section>
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

const Header = styled.header`
position: fixed;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
padding-top: 15px;
padding-right: 30px;
`

const HeaderButton = styled.button`
font-family: arial;
text-align: center;
padding: 5px 25px;
margin: 0px 30px;
font-size: 16px;
color: ${props => props.theme.buttonPrime};
background-color: ${props => props.theme.bg};
border: none;
filter: drop-shadow(0px 0px 5px ${props => props.theme.buttonPrime});
&:hover {
  filter: drop-shadow(0px 0px 0px ${props => props.theme.buttonPrime});
  color: ${props => props.theme.bg};
  background-color: ${props => props.theme.buttonPrime};
}
`

const Anchor = styled.a`
margin-bottom: 25vh
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

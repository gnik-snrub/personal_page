import { useState } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BG>
        <H>Lorem Ipsum etc.</H>
        <ButtonOne>Click me</ButtonOne>
        <ButtonTwo>Me too!</ButtonTwo>
      </BG>
      <BGDark>
        <H>Lorem Ipsum etc.</H>
        <ButtonOne>Click me</ButtonOne>
        <ButtonTwo>Me too!</ButtonTwo>
      </BGDark>
    </ThemeProvider>
  )
}

const BG = styled.div`
background: ${props => props.theme.bgLight};
height: 50vh;
width: 100vw;
display: grid;
place-items: center;
& button {
  font-size: 20px;
  font-family: arial;
  color: ${props => props.theme.bgLight}
}
`

const BGDark = styled.div`
background: ${props => props.theme.bgDark};
height: 50vh;
width: 100vw;
display: grid;
place-items: center;
& button {
  font-size: 20px;
  font-family: arial;
  color: ${props => props.theme.bgDark}
}
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

const ButtonOne = styled.button`
border: none;
background-color: ${props => props.theme.buttonPrime};
border-radius: 15px;
padding: 10px 30px;
`

const ButtonTwo = styled.button`
border: none;
background-color: ${props => props.theme.buttonSecondary};
border-radius: 15px;
padding: 10px 30px;
`

const theme = {
  text: "#873582",
  bgDark: "#2A222A",
  bgLight: "#E4E7C1",
  buttonPrime: "#7FB9BD",
  buttonSecondary: "#557F82",
  accent: "#873582"
}

export default App

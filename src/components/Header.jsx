import styled, {keyframes} from "styled-components"
import HeaderSvg from "./HeaderSvg"
import ThemeSwitch from "./ThemeSwitch"
import { PropTypes } from "prop-types"

const Header = ({ lightSwitch, navFunc, theme, refs }) => {
  const {about, projects, contact} = refs
  return (
    <>
        <HeaderSvg mode={theme} />
        <StyledHeader>
          <AnimationMask>
            <HeaderButton onClick={() => navFunc(about)} delay={0}>About Me</HeaderButton>
          </AnimationMask>
          <AnimationMask>
            <HeaderButton onClick={() => navFunc(projects)} delay={0.1}>My Projects</HeaderButton>
          </AnimationMask>
          <AnimationMask>
            <HeaderButton onClick={() => navFunc(contact)} delay={0.2}>Contact Me</HeaderButton>
          </AnimationMask>
          <ThemeSwitch onClick={lightSwitch} />
        </StyledHeader>
    </>
  )
}

const StyledHeader = styled.header`
position: sticky;
width: 100%;
top: 5px;
z-index: 1;
margin-top: -300px;
margin-right: 50px;
height: min-content;
display: flex;
align-items: center;
justify-content: flex-end;
`

const swingUp = keyframes`
  100% {
    transform: translateY(-20%);
  }
`

const setInPlace = keyframes`
  100% {
    transform: translateY(0);
  }
`

const AnimationMask = styled.div`
overflow: hidden;
display: grid;
place-items: center;
`

const HeaderButton = styled.button`
font-family: arial;
text-align: center;
padding: 5px 25px;
margin: 25px 10px;
font-size: 16px;
color: ${props => props.theme.bg};
background-color: transparent;
border: none;
transform: translateY(200%);
border: 2px solid ${props => props.theme.bg};
border-radius: 25px;
animation: ${swingUp} 1s ${props => props.delay}s cubic-bezier(0.165, 0.84, 0.44, 1) forwards, ${setInPlace} 0.3s 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
&:hover {
  color: ${props => props.theme.buttonPrime};
  border: 2px solid ${props => props.theme.buttonPrime};
}
&:hover:before {
  filter: drop-shadow(0px 0px 0px ${props => props.theme.buttonPrime});
  background-color: ${props => props.theme.bg};
}
&:before{
  content: '';
  display: block;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  transform: translateY(-550%);
  animation: ${setInPlace} 1s 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  border-radius: 25px;
  background-color: ${props => props.theme.buttonPrime};
}
`

Header.propTypes = {
  lightSwitch: PropTypes.func,
  navFunc: PropTypes.func,
  theme: PropTypes.string,
  refs: PropTypes.object
}

export default Header

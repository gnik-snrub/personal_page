import styled from "styled-components"
import HeaderSvg from "./HeaderSvg"
import ThemeSwitch from "./ThemeSwitch"
import { PropTypes } from "prop-types"

const Header = ({ lightSwitch, navFunc, theme, refs }) => {
  const {about, projects, contact} = refs
  return (
    <>
        <HeaderSvg mode={theme} />
        <StyledHeader>
          <HeaderButton onClick={() => navFunc(about)}>About Me</HeaderButton>
          <HeaderButton onClick={() => navFunc(projects)}>My Projects</HeaderButton>
          <HeaderButton onClick={() => navFunc(contact)}>Contact Me</HeaderButton>
          <ThemeSwitch onClick={lightSwitch} />
        </StyledHeader>
    </>
  )
}

const StyledHeader = styled.header`
position: sticky;
width: 100%;
top: 25px;
z-index: 1;
margin-top: -300px;
margin-right: 50px;
height: min-content;
display: flex;
align-items: center;
justify-content: flex-end;
`

const HeaderButton = styled.button`
font-family: arial;
text-align: center;
padding: 5px 25px;
margin: 0px 30px;
top: 50px;
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

Header.propTypes = {
  lightSwitch: PropTypes.func,
  navFunc: PropTypes.func,
  theme: PropTypes.string,
  refs: PropTypes.object
}

export default Header

import styled, {keyframes} from "styled-components"
import { PropTypes } from "prop-types"

const ThemeSwitch = ({ onClick }) => {

  const handleClick = () => {
    onClick()
  }

  return (
    <SVG viewBox="0 0 32 32" width="32px" height="32px" onClick={handleClick}>
      <line fill='none' strokeWidth={2} strokeLinecap="round" strokeLinejoin='round' strokeMiterlimit={10} x1="16" y1="3" x2="16" y2="29"/>
      <path fill='none' strokeWidth={2} strokeLinecap="round" strokeLinejoin='round' strokeMiterlimit={10} d="M16,23c-3.87,0-7-3.13-7-7s3.13-7,7-7"/>
      <line fill='none' strokeWidth={2} strokeLinecap="round" strokeLinejoin='round' strokeMiterlimit={10} x1="6.81" y1="6.81" x2="8.93" y2="8.93"/>
      <line fill='none' strokeWidth={2} strokeLinecap="round" strokeLinejoin='round' strokeMiterlimit={10} x1="3" y1="16" x2="6" y2="16"/>
      <line fill='none' strokeWidth={2} strokeLinecap="round" strokeLinejoin='round' strokeMiterlimit={10} x1="6.81" y1="25.19" x2="8.93" y2="23.07"/>
      <path fill='none' strokeWidth={2} strokeLinecap="round" strokeLinejoin='round' strokeMiterlimit={10} d="M16,12.55C17.2,10.43,19.48,9,22.09,9c0.16,0,0.31,0.01,0.47,0.02c-1.67,0.88-2.8,2.63-2.8,4.64  c0,2.9,2.35,5.25,5.25,5.25c1.6,0,3.03-0.72,3.99-1.85C28.48,20.43,25.59,23,22.09,23c-2.61,0-4.89-1.43-6.09-3.55"/>
    </SVG>
  )
}

const fadeIn = keyframes`
  100% {
    opacity: 1;
  }
`

const SVG = styled.svg`
border-radius: 50%;
padding: 3px;
margin-right: 30px;
opacity: 0;
animation: ${fadeIn} 0.3s 1.2s ease forwards;
background-color: ${props => props.theme.buttonPrime};
border: 2px solid ${props => props.theme.bg};
& * {
  stroke: ${props => props.theme.bg};
}
&:hover {
  background-color: ${props => props.theme.bg};
  border: 2px solid ${props => props.theme.buttonPrime};
  & * {
    stroke: ${props => props.theme.buttonPrime};
  }
}
`

ThemeSwitch.propTypes = {
  onClick: PropTypes.func
}

export default ThemeSwitch

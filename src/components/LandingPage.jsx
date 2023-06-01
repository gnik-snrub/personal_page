import styled, {keyframes} from "styled-components"
const LandingPage = () => {
  return (
        <StyledLanding>
          <LandingPageContent>
            <LandingMask>
              <LandingPageText>
                JOSIAH
              </LandingPageText>
            </LandingMask>
            <LandingMask>
              <LandingPageText>
                MORRIS
              </LandingPageText>
            </LandingMask>
          </LandingPageContent>
          <LandingPageGradient className='light'/>
          <LandingPageGradient className='dark'/>
        </StyledLanding>
  )
}

const loadSvg = keyframes`
  100% {
    height: 99vh;
  }
`

const StyledLanding = styled.div`
position: relative;
height: 100vh;
width: 100vw;
display: grid;
z-index: 1;
animation: ${loadSvg} 0.3s forwards;
`

const LandingPageGradient = styled.div`
height: 100%;
width: 100%;
transition-delay: 0.012s;
&.dark {
  position: absolute;
  background: linear-gradient(#2A222A, #873582);
  opacity: ${props => props.theme.label === 'dark' ? '1' : '0'};
}
&.light {
  background: linear-gradient(#E4E7C1, #7FB9BD);
}
`

const slideUp = keyframes`
  80% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(0);
  }
`

const LandingPageText = styled.h1`
font: bold italic 134px arial;
width: 100%;
text-align: center;
transform: translateY(100%);
animation: ${slideUp} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
animation-delay: ${props => props.delay}s;
margin: 0;
color: ${props => props.theme.text};
`

const LandingPageContent = styled.div`
z-index: 1;
position: absolute;
top: 50vh;
left: 50vw;
transform: translate(-50%, -50%);
`

const LandingMask = styled.div`
overflow: hidden;
`

export default LandingPage

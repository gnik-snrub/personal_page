import styled, {keyframes} from "styled-components"

const LandingPage = () => {
  return (
        <StyledLanding>
          <LandingPageContent>
            <LandingMask walls>
              <LandingPageScroller>
                Full Stack Web Developer - Designer - Self Guided Learner - Lover of Purple - Pokemon Master -
              </LandingPageScroller>
              <LandingPageScroller>
                Full Stack Web Developer - Designer - Self Guided Learner - Lover of Purple - Pokemon Master -
              </LandingPageScroller>
              <LandingPageScroller>
                Full Stack Web Developer - Designer - Self Guided Learner - Lover of Purple - Pokemon Master -
              </LandingPageScroller>
            </LandingMask>
            <LandingMask>
              <LandingPageText delay={0}>
                JOSIAH
              </LandingPageText>
            </LandingMask>
            <LandingMask>
              <LandingPageText delay={0.2}>
                MORRIS
              </LandingPageText>
            </LandingMask>
            <LandingMask walls>
              <LandingPageScroller rev>
                Full Stack Web Developer - Designer - Self Guided Learner - Lover of Purple - Pokemon Master -
              </LandingPageScroller>
              <LandingPageScroller rev>
                Full Stack Web Developer - Designer - Self Guided Learner - Lover of Purple - Pokemon Master -
              </LandingPageScroller>
              <LandingPageScroller rev>
                Full Stack Web Developer - Designer - Self Guided Learner - Lover of Purple - Pokemon Master -
              </LandingPageScroller>
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
z-index: 2;
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
  100% {
    transform: translateY(-5%);
  }
`

const setInPlace = keyframes`
  100% {
    transform: translateY(0);
  }
`

const scroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`

const LandingPageScroller = styled.p`
text-align: center;
flex: 0 0 auto;
padding: 10px 0;
padding-left: 4px;
font: bold 14px arial;
margin: 0;
color: ${props => props.theme.text};
animation: ${scroll} 18s linear infinite ${props => props.rev ? 'reverse' : ''};
`

const LandingPageText = styled.h1`
font: bold italic 134px arial;
width: 100%;
text-align: center;
transform: translateY(100%);
animation: ${slideUp} 1s ${props => props.delay}s cubic-bezier(0.165, 0.84, 0.44, 1) forwards, ${setInPlace} 0.3s 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
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
border-left: ${props => props.walls ? '3px' : 'none'} solid ${props => props.theme.text};
border-right: ${props => props.walls ? '3px' : 'none'} solid ${props => props.theme.text};
overflow: hidden;
display: flex;
`

export default LandingPage

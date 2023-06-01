const LandingPage = () => {
  return (
        <StyledLanding>
                JOSIAH
                MORRIS
          <LandingPageGradient className='light'/>
          <LandingPageGradient className='dark'/>
        </StyledLanding>
  )
}

const StyledLanding = styled.div`
position: relative;
height: 100vh;
width: 100vw;
display: grid;
z-index: 1;
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

export default LandingPage

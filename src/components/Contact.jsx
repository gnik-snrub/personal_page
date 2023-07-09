import styled from "styled-components"

const Contact = ({ innerRef }) => {
  return (
    <ContactBG>
      <StyledContact ref={innerRef}>
        <h3>Contact me!</h3>
        <a href="https://github.com/gnik-snrub"><img id="github" src='/github.svg' /></a>
        <a href="https://linkedin.com/in/josiah-morris-012706a1"><img id="linkedin" src='/linkedin.svg' /></a>
        <a href="https://twitter.com/goodkingler"><img id="twitter" src='/twitter.svg' /></a>
      </StyledContact>
    </ContactBG>
  )
}

const StyledContact = styled.section`
width: 25%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
& h3 {
  width: 100%;
  text-align: center;
}
& img {
  width: 50px;
  height: 50px;
  padding: 7px;
  background: white;
  border-radius: 25%;
}
`

const ContactBG = styled.section`
padding-top: 15vh;
height: 100%;
width: 100%;
display: grid;
place-items: center;
position: relative;
overflow: hidden;
&:before {
  content: '';
  position: absolute;
  z-index: -1;
  background: linear-gradient(transparent 60%, #873582);
  opacity: ${props => props.theme.label === 'dark' ? '100%' : '0%'};
  transition: 0.5s;
  height: 100%;
  width: 100%;
}
&:after {
  content: '';
  position: absolute;
  z-index: -1;
  background: linear-gradient(transparent 60%, #7FB9BD);
  opacity: ${props => props.theme.label === 'dark' ? '0%' : '100%'};
  transition: 0.5s;
  height: 100%;
  width: 100%;
}
`

export default Contact

import styled from "styled-components"

const About = ({ innerRef }) => {
  return (
    <StyledBG ref={innerRef}>
      <StyledAbout>
        <Image src="/Headshot.jpg"/>
        <h2>Hi there, I'm Josiah Morris</h2>
        <p> Embracing the path of a lifelong learner, I've ventured into the
            world of web development as a self-taught enthusiast from Australia.
            Committed to lifelong learning, I embrace every opportunity to enhance my
            expertise and stay updated with the ever-changing web development
            landscape.</p>
        <p> With a blend of technical skills, creative thinking, and a
            strong focus on user-centric design, I approach each project with
            dedication, attention to detail, and a genuine passion for crafting
            engaging user experiences.</p>
      </StyledAbout>
    </StyledBG>
  )
}

const Image = styled.img`
border: 5px solid ${props => props.theme.buttonPrime};
border-radius: 50%;
min-width: 250px;
max-height: 250px;
object-fit: cover;
grid-area: img;
`

const StyledAbout = styled.div`
font-family: arial;
width: 50%;
height: min-content;
display: grid;
place-items: center;
grid-template-columns: min-content auto;
grid-template-rows: min-content auto;
grid-template-areas: "img ." "img ." "img .";
gap: 0px 30px;
margin-bottom: 10%;
`

const StyledBG = styled.section`
width: 100%;
padding-top: 25vh;
height: 100%;
display: grid;
place-items: center;
position: relative;
overflow: hidden;
&:before {
  content: '';
  position: absolute;
  z-index: -1;
  background: linear-gradient(transparent 60%, #873582);
  transform: ${props => props.theme.label === 'dark' ? 'translateX(0%)' : 'translateX(-101%)'};
  transition: 0.5s;
  height: 100%;
  width: 100%;
}
&:after {
  content: '';
  position: absolute;
  z-index: -1;
  background: linear-gradient(transparent 60%, #7FB9BD);
  transform: ${props => props.theme.label === 'dark' ? 'translateX(101%)' : 'translateX(0%)'};
  transition: 0.5s;
  height: 100%;
  width: 100%;
}
`

export default About

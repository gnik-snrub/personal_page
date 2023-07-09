import styled from "styled-components"

const About = ({ innerRef }) => {
  return (
    <StyledBG ref={innerRef}>
      <StyledAbout>
        <Image src="Headshot.jpg"/>
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
background-color: ${props => props.theme.bg}99;
border: 2px solid ${props => props.theme.accent};
border-radius: 15px;
padding: 10px 30px;
backdrop-filter: blur(10px);
`

const StyledBG = styled.section`
width: 100%;
padding-top: 30vh;
height: 130%;
display: grid;
place-items: center;
position: relative;
overflow: hidden;
`

export default About

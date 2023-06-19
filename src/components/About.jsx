import styled from "styled-components"

const About = () => {
  return (
    <>
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
    </>
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

const StyledAbout = styled.section`
font-family: arial;
width: 50%;
max-height: 300px;
z-index: -1;
position: relative;
padding: 50px 70px;
border-radius: 25px;
overflow: hidden;
display: grid;
place-items: center;
grid-template-columns: min-content auto;
grid-template-rows: min-content auto;
grid-template-areas: "img ." "img ." "img .";
gap: 0px 30px;
&:before {
  content: '';
  position: absolute;
  z-index: -1;
  background: linear-gradient(transparent 25%, #873582);
  transform: ${props => props.theme.label === 'dark' ? 'translateY(0%)' : 'translateY(-101%)'};
  transition: 0.5s;
  height: 100%;
  width: 100%;
}
&:after {
  content: '';
  position: absolute;
  z-index: -1;
  background: linear-gradient(#7FB9BD, transparent 75%);
  transform: ${props => props.theme.label === 'dark' ? 'translateY(101%)' : 'translateY(0%)'};
  transition: 0.5s;
  height: 100%;
  width: 100%;
}
`

export default About

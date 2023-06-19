import styled from 'styled-components'

const Projects = () => {
  return (
    <StyledProjects>
      <article>
        <img id="demoGif" src='/Pokemon.gif' />
        <h3>Where's that Pokemon</h3>
        <span>A Pokemon-themed web app which draws inspiration from "Where's
        Wally" and the "Who's that Pokemon" segment from the classic anime. Built
        using React, styled-components, a custom hook, while utilizing firebase as
        a backend to build a scoreboard.</span>
        <a href='https://gnik-snrub.github.io/where-is-wally' target='_blank' rel='noreferrer noopener'>View it live</a>
        <a href='https://github.com/gnik-snrub/where-is-wally' target='_blank' rel='noreferrer noopener'>Github repo</a>
      </article>
      <article>
        <img id="demoGif" src='/Storefront.gif' />
        <h3>Indie Games 'r' Us</h3>
        <span>A captivating indie-game storefront concept using React and
        styled-components. Leveraging the power of react-router, I created seamless
        navigation using paths to showcase a variety of games, demonstrating my
        ability to create visually appealing interfaces and deliver intuitive user
        experiences.</span>
        <a href='https://gnik-snrub.github.io/shopping-cart' target='_blank' rel='noreferrer noopener'>View it live</a>
        <a href='https://github.com/gnik-snrub/shopping-cart' target='_blank' rel='noreferrer noopener'>Github repo</a>
      </article>
      <article>
        <img id="demoGif" src='/Weather.gif' />
        <h3>Weather app</h3>
        <span> A sleek and informative weather app drawing from the API from
        weatherapi.com. Seamlessly displays a variety of local weather conditions,
        and associated country for any user-queried city from around the
        world.</span>
        <a href='https://gnik-snrub.github.io/weather' target='_blank' rel='noreferrer noopener'>View it live</a>
        <a href='https://github.com/gnik-snrub/weather' target='_blank' rel='noreferrer noopener'>Github repo</a>
      </article>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
width: 90%;
min-height: 500px;
max-height: 750px;
padding-bottom: 3%;
overflow: hidden;
position: relative;
display: flex;
flex-flow: row wrap;
justify-content: center;
gap: 0 25px;
&:before {
  content: '';
  position: absolute;
  z-index: -1;
  background: linear-gradient(transparent 25%, #873582);
  transform: ${props => props.theme.label === 'dark' ? 'translateY(0%)' : 'translateY(-101%)'};
  transition: 0.5s;
  border-radius: 25px;
  height: 100%;
  width: 100%;
}
&:after {
  content: '';
  position: absolute;
  z-index: -1;
  background: linear-gradient(#7FB9BD 25%, transparent);
  transform: ${props => props.theme.label === 'dark' ? 'translateY(101%)' : 'translateY(0%)'};
  transition: 0.5s;
  border-radius: 25px;
  height: 100%;
  width: 100%;
}
& h2 {
  text-align: center;
  width: 100%;
  margin: 0;
  margin-top: 2%;
}
& article {
  position: relative;
  overflow: hidden;
  width: 25%;
  height: 100%;
  padding: 10px 30px 20px 30px;
  display: grid;
  place-items: center;
  grid-template-rows: 50% 8% auto 8%;
  grid-template-areas: "preview preview" "heading heading" "description description" "auto auto";
  grid-template-columns: 50% 50%;
  & h3 {
    grid-area: heading;
  }
  & a {
    color: ${props => props.theme.bg};
    background-color: ${props => props.theme.buttonPrime};
    border: 2px solid ${props => props.theme.bg};
    padding: 5px 25px;
    border-radius: 25px;
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.buttonPrime};
      background-color: ${props => props.theme.bg};
      border: 2px solid ${props => props.theme.buttonPrime};
    }
  }
  & span {
    grid-area: description;
    margin: 20px 0;
    text-align: center;
  }
  & img {
    grid-area: preview;
    width: 80%;
  }
}
`

export default Projects

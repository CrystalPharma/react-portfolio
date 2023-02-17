import React from "react";
import { Container, Header, Image } from 'semantic-ui-react'
// import devIcon from '../images/webdev.svg'
// import designIcon from '../images/Design.svg';
// import photoIcon from '../images/photography.svg';
import name from '../images/name.png';
import logo from '../images/logo.png';


function Home() {
  return (
    <div>
      <div class="one column stackable ui grid centered">
        <Image src={name} size='massive'></Image>
        <Image src={logo} size='massive'></Image>
        <Container>
        <div class="six wide computer column">
         
        <a href="https://drive.google.com/file/d/1FXgfHiY-mjsvNTAvDZfVG8OBUJObTvfi/view?usp=sharing" target={"_blank"}><button class="ui red inverted button">CV</button></a>
          <a href="https://github.com/CrystalPharma" target={"_blank"}><button class="ui orange inverted button">Github</button></a>
          <a href="https://dribbble.com/crystalpharma" target={"_blank"}><button class="ui yellow inverted button">Dribble</button></a>
          <a href="https://www.linkedin.com/in/crystal-leung-816572198/" target={"_blank"}><button class="ui primary inverted button">Linkedin</button></a>
          <a href="mailto:crystalpharma@gmail.com" target={"_blank"}><button class="ui teal inverted button">Hire Me</button></a>
          <br />
        </div>
        </Container>
      </div>
<br/><br/>
    </div>
  );
}

export default Home;
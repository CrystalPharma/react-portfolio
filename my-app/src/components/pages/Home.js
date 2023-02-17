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
  <div class="column">
    <div class="ui segment">
      <p></p>
      <p></p>
    </div>
  </div>
</div>
            
        </div>
    );
}

export default Home;
import React from "react";
import { Container, Header, Image, Segment } from 'semantic-ui-react'
// import name from '../images/name.png';
import skills from '../images/Skill&Exp.png';
import avatar from '../images/avatar-icon.png';


function Home() {
  return (
    <div>
      <Segment basic inverted style={{ fontFamily: 'Roboto mono' }}>
        <h1 className="one column stackable ui grid centered huge header" style={{ fontFamily: 'Tourney' }}><b><u>Crystal Leung</u></b></h1>
        <h2 className="one column stackable ui grid centered"style={{fontFamily:'Zeyada'}}>Make Simple Web Design Accessible.</h2>
        <br /><br />
        <h2 className="one column stackable ui grid centered"> Hello this is<b>Crystal</b> <br/>a Frontend web developer and a Pharmacist</h2>
       
        <h3 className="one column stackable ui grid centered"></h3>
        <div className="two column stackable ui grid">
          <div className="row"><Image src={avatar} size='massive' style={{ display: 'flex', position: 'relative', opacity: '90%', zIndex: '0', justifyContent: 'center', filter: 'blur(2px)' }}></Image>
            <div>
              <Image src={skills} size='medium' style={{ position: 'relative', opacity: '90%', zIndex: '0' }}></Image>
              <h2>Web Development Skills</h2>
              <h3>  Javascript (React)</h3>
              <h3>  HTML</h3>
              <h3>  CSS</h3>
              <br/>
              <h2>Clinical Pharmacy Skills</h2>
              <h3>  New Medicine Services</h3>
              <h3>  Vaccinations
                  <h4>Flu Vaccinaton</h4>
                  <h4>Travel Vaccinaton</h4>
              </h3>
              <h3> Travel Advice Services</h3>
              <h3>And more_</h3>
              <br/>
              <div className="six wide computer column centered" style={{ display: 'flex', justifyContent: 'center' }}>
              <a style={{ position: 'relative', zIndex: '1' }} href="https://drive.google.com/file/d/1FXgfHiY-mjsvNTAvDZfVG8OBUJObTvfi/view?usp=sharing" target={"_blank"}><button className="ui red inverted  basic button">CV</button></a>
              <a style={{ position: 'relative', zIndex: '1' }} href="https://github.com/CrystalPharma" target={"_blank"}><button className="ui orange inverted basic button">Github</button></a>
              <a style={{ position: 'relative', zIndex: '1' }} href="https://www.linkedin.com/in/crystal-leung-816572198/" target={"_blank"}><button className="ui primary inverted basic button">Linkedin</button></a>
              <a style={{ position: 'relative', zIndex: '1' }} href="mailto:crystalpharma@gmail.com" target={"_blank"}><button className="ui teal inverted basic button">Email</button></a>
            </div>
            </div>
          </div>
        </div>
      </Segment>
    </div>
  );
}

export default Home;
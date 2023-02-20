import React from "react";
import { Header, Container, Segment, List, Image } from 'semantic-ui-react';
// import project from '../images/project.png';
import weather from '../images/weatherapi.png';
import readme from '../images/readmeapp.png';
import ss from '../images/SouporSalad.png';
import movie from '../images/movie.png';




function Project() {
  return (
    <div>
      <Segment basic inverted class="ui two column doubling stackable grid container" style={{ fontFamily: 'Roboto mono' }}>
        <Container text>
          <div class="six wide computer column" style={{ fontFamily: 'Roboto mono' }}>
            <Segment basic inverted class="ui two column doubling stackable grid container">
              <div class="ui two column grid stackable">
                <div class="column">
                  <div class="ui segment" style={{ backgroundColor: 'transparent' }}>
                    <Image src={weather} size='massive'></Image>
                    <Header as='h3' style={{ color: '#007bff' }}>Weather Dashboard</Header>
                    <div style={{ color: '#007bff' }} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat
                    </div>
                    <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                    <a href='https://crystalpharma.github.io/weather-dashboard/' target={"_blank"} >Weather Dashboard_</a>
                    <div>
                    <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                    <a href='https://github.com/CrystalPharma/weather-dashboard' target={"_blank"} >Weather Dashboard_(repo)</a>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="ui segment" style={{ backgroundColor: 'transparent' }}>
                    <Image src={readme} size='massive'></Image>
                    <Header as='h3' style={{ color: '#F76AF8' }}>Readme.md Generator</Header>
                    <div style={{ color: '#F76AF8' }} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat
                    </div>
                    <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                    <a href='https://github.com/CrystalPharma/README-generator' target={"_blank"} >Readme-generator_</a>
                    <div>
                      <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                      <a href='https://drive.google.com/file/d/1vaPkgNie1x6SyHwiminI4ojs12Uw224u/view' target={"_blank"} >Readme-generator_Demostration Video</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui two column grid stackable">
                <div class="column">
                  <div class="ui segment" style={{ backgroundColor: 'transparent' }}>
                  <Image src={ss} size='massive'></Image>
                    <Header as='h3' style={{ color: '#6f42c1' }}>SouporSalad Recipe App</Header>
                    <div style={{ color: '#6f42c1' }} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat
                    </div>
                    <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                    <a href='https://slytherin-frontend.github.io/soupOrSalad/' target={"_blank"} >Soup Or Salad App_</a>
                    <div>
                      <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                      <a href='https://github.com/Slytherin-Frontend/soupOrSalad' target={"_blank"} >Soup Or Salad App_(repo)</a>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="ui segment" style={{ backgroundColor: 'transparent' }}>
                  <Image src={movie} size='massive'></Image>
                    <Header as='h3' style={{ color: '#e83e8c' }}>Movie Search App</Header>
                    <div style={{ color: '#e83e8c' }} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat
                    </div>
                    <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                    <a href='https://moviewonderland.netlify.app/' target={"_blank"} >Movie Search App_</a>
                    <div>
                      <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                      <a href='https://github.com/CrystalPharma/reactApppractice' target={"_blank"} >Movie Search App_(repo)</a>
                    </div>
                  </div>
                </div>
              </div>
            </Segment>
          </div>
        </Container>
      </Segment>
    </div>
  );
}

export default Project;
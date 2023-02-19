import React from "react";
import { Header, Container, Segment, Image } from 'semantic-ui-react';
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
          <Header as='h1' style={{ color: 'white' }}><i>Project</i></Header>
          <div class="ui two column grid stackable">
            <div class="column">
              <div class="ui segment" style={{ backgroundColor: 'transparent' }}>
                <Header as='h3' style={{ color: '#6c757d' }}>Weather Forecast App</Header>
                <div style={{ color: '#6c757d' }} ><Image src={weather} size='medium' style={{ opacity: '70%' }}></Image>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat
                </div>
              </div>
            </div>
            <div class="column">
              <div class="ui segment" style={{ backgroundColor: 'transparent' }}>
                <Header as='h3' style={{ color: '#ffc107' }}>Readme.md Generator</Header>
                <div style={{ color: '#ffc107' }} ><Image src={readme} size='medium' style={{ opacity: '70%' }}></Image>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat
                </div>
                <a href="https://moviewonderland.netlify.app/"></a>
              </div>
            </div>
          </div>
          <div class="ui two column grid stackable">
            <div class="column">
              <div class="ui segment" style={{ backgroundColor: 'transparent' }}>
                <Header as='h3' style={{ color: '#20c997' }}>Soup Or Salad Recipe App</Header>
                <div style={{ color: '#20c997' }} ><Image src={ss} size='medium' style={{ opacity: '70%' }}></Image>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat
                </div>
              </div>
            </div>
            <div class="column">
              <div class="ui segment" style={{ backgroundColor: 'transparent' }}>
                <Header as='h3' style={{ color: '#17a2b8' }}>MovieLand App</Header>
                <div style={{ color: '#17a2b8' }} ><Image src={movie} size='medium' style={{ opacity: '70%' }}></Image>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat
                </div>
                <a href="https://moviewonderland.netlify.app/"></a>
              </div>
            </div>
          </div>
        </Container>
      </Segment>
    </div>
  );
}

export default Project;
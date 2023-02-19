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

          <div class="eight wide computer column" style={{ fontFamily: 'Roboto mono' }}>
            <Header as='h1' style={{ color: 'white' }}><i>Project</i></Header>
            <div class="ui two column grid stackable">
              <div class="column">
                <div class="ui segment" style={{ backgroundColor: 'transparent' }}>
                  <Header as='h3' style={{ color: '#6c757d' }}>Weather Forecast App</Header>
                  <div style={{ color: '#6c757d' }} ><Image src={weather} size='medium' style={{ opacity: '70%' }}></Image>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat
                  </div>
                  <div class='extra content'>
                    <List style={{ color: '#rgba(255,255,255,.9)' }}>
                      <List.Item>
                        <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                        <List.Content>
                          <a style={{ color: 'rgba(255,255,255,.9)' }} href='https://crystalpharma.github.io/weather-dashboard/' target={"_blank"}>https://crystalpharma.github.io/weather-dashboard/</a>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                        <List.Content>
                          <a style={{ color: 'rgba(255,255,255,.9)' }} href='hhttps://github.com/CrystalPharma/weather-dashboardttps://github.com/CrystalPharma' target={"_blank"}>https://github.com/CrystalPharma/weather-dashboard</a>
                        </List.Content>
                      </List.Item>
                    </List>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="ui segment" style={{ backgroundColor: 'transparent' }}>
                  <Header as='h3' style={{ color: '#ffc107' }}>Readme.md Generator</Header>
                  <div style={{ color: '#ffc107' }} ><Image src={readme} size='medium' style={{ opacity: '70%' }}></Image>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat
                  </div>
                  <div class='extra content'>
                    <List style={{ color: 'rgba(255,255,255,.9)' }}>
                      <List.Item>
                        <List.Icon name='linkify' style={{ color: '#rgba(255,255,255,.9)' }} />
                        <List.Content>
                          <a style={{ color: 'rgba(255,255,255,.9)' }} href='https://github.com/CrystalPharma/README-generator' target={"_blank"}>https://github.com/CrystalPharma/README-generator</a>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                        <List.Content>
                          <a style={{ color: 'rgba(255,255,255,.9)' }} href='https://drive.google.com/file/d/1vaPkgNie1x6SyHwiminI4ojs12Uw224u/view' target={"_blank"}>Demonstration Video</a>
                        </List.Content>
                      </List.Item>
                    </List>
                  </div>
                </div>
              </div>
            </div>
            <div class="ui two column grid stackable">
              <div class="column">
                <div class="ui segment" style={{ backgroundColor: 'transparent' }}>
                  <Header as='h3' style={{ color: '#20c997' }}>Soup Or Salad Recipe App</Header>
                  <div style={{ color: '#20c997' }} ><Image src={ss} size='medium' style={{ opacity: '70%' }}></Image>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat
                  </div>
                  <div class='extra content'>
                    <List style={{ color: 'rgba(255,255,255,.9)' }}>
                      <List.Item>
                        <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                        <List.Content>
                          <a style={{ color: 'rgba(255,255,255,.9)' }} href='https://slytherin-frontend.github.io/soupOrSalad/' target={"_blank"}>https://slytherin-frontend.github.io/soupOrSalad/</a>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                        <List.Content>
                          <a style={{ color: 'rgba(255,255,255,.9)' }} href='https://github.com/Slytherin-Frontend/soupOrSalad' target={"_blank"}>https://github.com/Slytherin-Frontend/soupOrSalad</a>
                        </List.Content>
                      </List.Item>
                    </List>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="ui segment" style={{ backgroundColor: 'transparent' }}>
                  <Header as='h3' style={{ color: '#17a2b8' }}>MovieLand App</Header>
                  <div style={{ color: '#17a2b8' }} ><Image src={movie} size='medium' style={{ opacity: '70%' }}></Image>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat
                  </div>
                  <div class='extra content'>
                    <List style={{ color: 'rgba(255,255,255,.9)' }}>
                      <List.Item>
                        <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                        <List.Content>
                          <a style={{ color: 'rgba(255,255,255,.9)' }} href='https://moviewonderland.netlify.app/' target={"_blank"}>https://moviewonderland.netlify.app/</a>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='linkify' style={{ color: 'rgba(255,255,255,.9)' }} />
                        <List.Content>
                          <a style={{ color: 'rgba(255,255,255,.9)' }} href='https://github.com/CrystalPharma/reactApppractice' target={"_blank"}>https://github.com/CrystalPharma/reactApppractice</a>
                        </List.Content>
                      </List.Item>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Segment>
    </div>
  );
}

export default Project;
import React from "react";
import { Container, Header, Image } from 'semantic-ui-react'
import devIcon from '../images/webdev.svg'
import designIcon from '../images/Design.svg';
import photoIcon from '../images/photography.svg';
import managementIcon from '../images/management.svg';
// import project from '../images/project.png'


function Project() {
  return (
    <div>
      <Container text>
      <Header as='h1'><i>Project</i></Header>
        <br/>
        <div class="ui two column doubling stackable grid container">
          <div className="row">
            <div className="column">
              <div class="ui card">
                <Header as='h3'><img src={devIcon} />Web Dev</Header>
                <div className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat</div>
              </div>

            </div>
            <div class="column">
              <div class="ui card">
                <Header as='h3'><p><img src={designIcon} /> Design</p></Header>
                <div className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="column">
              <div class="ui card">
                <Header as='h3'><p><img src={photoIcon} />  Photography</p></Header>
                <div className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat</div>
              </div>
            </div>
            <div class="column">
              <div class="ui card">
                <Header as='h3'><p><img src={managementIcon} />  Management</p></Header>
                <div className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Project;
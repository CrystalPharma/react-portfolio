import React from "react";
import { Container, Header } from 'semantic-ui-react'

function Project() {
  return (
    <div>
            <Container text>
            <h3 class="ui header"></h3>
                <Header as='h2'>Project</Header>
                <div class="ui divider"></div>
                <div class="ui two column doubling stackable grid container">
  <div class="column">
    <p>abc</p>
    <p></p>
  </div>
  <div class="column">
    <p>2</p>
    <p></p>
  </div>
</div>
            </Container>
        </div>
  );
}

export default Project;
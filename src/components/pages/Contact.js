import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react'
// import contact from '../images/contact.png'

function Contact() {
    return (
        <div>
            <Segment basic inverted class="ui two column doubling stackable grid container" style={{ fontFamily: 'Roboto mono' }}>
                <Container text>
                    <Header as='h1' style={{ color: 'white' }}><i>Contact</i></Header>
                    <form class="ui form">
                        <div class="field">
                            <label>Name</label>
                            <input type="text" name="first-name" placeholder="First Name" />
                        </div>
                        <div class="field">
                            <label>Title</label>
                            <input type="text" name="title" placeholder="Title" />
                        </div>
                        <div class="field">
                            <div class="field">
                                <label>Text</label>
                                <textarea></textarea>
                            </div>
                        </div>
                        <a href='#'><button class="ui button" type="submit">Submit</button></a>
                    </form>
                </Container>
            </Segment>
        </div>
    );
}

export default Contact;
import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react'
// import contact from '../images/contact.png'

function Contact() {
    return (
        <div>
            <Container text>
                <Header as='h1'><i>Contact</i></Header>
                <form class="ui form">
                    <div class="field">
                        <label>Name</label>
                        <input type="text" name="first-name" placeholder="First Name" />
                    </div>
                    <div class="field">
                        <label>Title</label>
                        <input type="text" name="last-name" placeholder="Last Name" />
                    </div>
                    <div class="field">
                        <div class="field">
                            <label>Text</label>
                            <textarea></textarea>
                        </div>
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                </form>
            </Container>
        </div>
    );
}

export default Contact;
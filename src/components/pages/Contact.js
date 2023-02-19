import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react'
// import contact from '../images/contact.png'

function Contact() {
    return (
        <div>
            <Segment basic inverted class="ui two column doubling stackable grid container" style={{ fontFamily: 'Roboto mono' }}>
                <Container text>
                <div class="six wide computer column" style={{ fontFamily: 'Roboto mono' }}>
                    <Header as='h1' style={{ color: 'white' }}><i>Contact</i></Header>
                    <Header as='h1' style={{ color: '#E0E3EA', fontFamily: 'Roboto mono' }}> Let's connect!</Header>
                        <div class="six wide computer column centered" style={{ display: 'flex' }}>
                            <a style={{ position: 'relative', zIndex: '1' }} href="https://drive.google.com/file/d/1FXgfHiY-mjsvNTAvDZfVG8OBUJObTvfi/view?usp=sharing" target={"_blank"}><button class="ui red inverted  basic button">CV</button></a>
                            <a style={{ position: 'relative', zIndex: '1' }} href="https://github.com/CrystalPharma" target={"_blank"}><button class="ui orange inverted basic button">Github</button></a>
                            <a style={{ position: 'relative', zIndex: '1' }} href="https://www.linkedin.com/in/crystal-leung-816572198/" target={"_blank"}><button class="ui primary inverted basic button">Linkedin</button></a>
                            <a style={{ position: 'relative', zIndex: '1' }} href="mailto:crystalpharma@gmail.com" target={"_blank"}><button class="ui teal inverted basic button">Hire Me</button></a>
                        </div>
                        <Header as='h2' style={{ color: 'white' }}>Contact Form</Header>
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
                        </div>
                </Container>
            </Segment>
        </div>
    );
}

export default Contact;
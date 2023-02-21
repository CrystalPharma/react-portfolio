import React, {useRef} from 'react';
import { Container, Header, Segment } from 'semantic-ui-react'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ijfa2ku', 'template_egh9bk8', form.current, 'tLR_hmqWuCo58bAs3')
        .then((result) => {
            console.log(result.text);
            alert('Message sent successfully');
            console.log('message sent');
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
            <Segment basic inverted class="ui two column doubling stackable grid container" style={{ fontFamily: 'Roboto mono' }}>
                <Container text>
                    <div class="six wide computer column" style={{ fontFamily: 'Roboto mono' }}>
                        <Header as='h1' style={{ color: '#E0E3EA', fontFamily: 'Roboto mono' }}> Let's connect!</Header>
                        <div class="six wide computer column centered" style={{ display: 'flex' }}>
                            <a style={{ position: 'relative', zIndex: '1' }} href="https://drive.google.com/file/d/1FXgfHiY-mjsvNTAvDZfVG8OBUJObTvfi/view?usp=sharing" target={"_blank"}><button class="ui red inverted  basic button">CV</button></a>
                            <a style={{ position: 'relative', zIndex: '1' }} href="https://github.com/CrystalPharma" target={"_blank"}><button class="ui orange inverted basic button">Github</button></a>
                            <a style={{ position: 'relative', zIndex: '1' }} href="https://www.linkedin.com/in/crystal-leung-816572198/" target={"_blank"}><button class="ui primary inverted basic button">Linkedin</button></a>
                            <a style={{ position: 'relative', zIndex: '1' }} href="mailto:crystalpharma@gmail.com" target={"_blank"}><button class="ui teal inverted basic button">Hire Me</button></a>
                        </div>
                        <div>
                        <form class="ui form" ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                        </div>
                    </div>
                </Container>
            </Segment>
        </div>
    );
}

export default Contact;
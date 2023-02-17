import React from "react";
import { Container, Header, Image, List } from 'semantic-ui-react'
import devIcon from '../images/webdev.svg'
import designIcon from '../images/Design.svg';
import photoIcon from '../images/photography.svg';
import managementIcon from '../images/management.svg';
import profile from '../images/profile-pic.jpg'
// import about from '../images/about.png'

function About() {
    return (
        <div>
            <Container text>
                <Header as='h1'><i>About</i></Header>
                <div class="ui people shape stackable grid container">
                    <div class='row'>
                        <div class='column'>
                            <div class="ui card">
                                <Image centered src={profile} ></Image>
                                <div class="content">
                                    <div class="header">Crystal Leung</div>
                                    <div class>
                                        <a>Pharmacist</a>
                                    </div>
                                    <div class>
                                        <a>Frontend Web Developer</a>
                                    </div>
                                    <div class="extra content">
                                        <List>
                                            <List.Item>
                                                <List.Icon name='marker' />
                                                <List.Content>London, UK</List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='mail' />
                                                <List.Content>
                                                    <a href='mailto:crystalpharma@gmail.com'>crystalpharma@gmail.com</a>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='linkify' />
                                                <List.Content>
                                                    <a href='https://github.com/CrystalPharma'>https://github.com/CrystalPharma</a>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ui divider"></div>
                <div class="six wide computer column">
                    <p>
                        Hey there, I'm Crystal Leung
                        A compassionate and motivated Pharmacist with 5 years of experience.
                    </p>

                    <p>   Based in London providing professional services throughout UK experience <br />in various settings including: Online Pharmacy and Vaccination Clinic.</p>

                    <p>    I am determined in delivering exceptional customer experiences.<br />I am learning more on frontend web development and working in web development.
                    </p>
                    <br />
                </div>
                <div class="ui divider"></div>
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
            <br />
            <br />
        </div>
    );
}

export default About;
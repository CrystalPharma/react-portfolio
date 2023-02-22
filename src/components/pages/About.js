import React from "react";
import { Container, Header, Image, List, Segment } from 'semantic-ui-react'
import devIcon from '../images/webdev.svg';
import designIcon from '../images/Design.svg';
import photoIcon from '../images/photography.svg';
import managementIcon from '../images/management.svg';
import profile from '../images/bwpic.png';
import git from '../images/github.png';

function About() {
    return (
        <div>
            <Segment basic inverted style={{ fontFamily: 'Roboto mono' }}>
                <Container text>
                    <Header as='h1' style={{ color: 'white' }}><i>More about me</i></Header>
                    <div className="ui people shape stackable grid container" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="ui card" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Image centered src={profile} style={{ opacity: '95%' }} ></Image>
                            <div className="extra content">Crystal Leung</div>
                            <div className="extra content">
                                <List>
                                    <List.Item>
                                        <List.Icon name='marker dark' />
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
                    <div className="ui divider"></div>
                        <div className="six wide computer column" style={{ fontFamily: 'Roboto mono' }}>
                            Hey there, I'm Crystal Leung.
                            A compassionate and motivated Pharmacist with 5 years of experience.
                            Based in London providing professional services throughout UK with experience in various settings including: Online Pharmacy and Vaccination Clinic.
                            I am determined in delivering exceptional customer experiences and embracing to be the best I can.<br />I am learning more on frontend web development and have a passion in frontend web development.
                            <br />
                        </div>
                    <div className="ui divider"></div>
                    <Segment basic inverted className="ui two column doubling stackable grid container">
                        <div className="ui two column grid stackable">
                            <div className="column">
                                <div className="ui segment" style={{ backgroundColor: 'transparent' }}>
                                    <Header as='h3' style={{ color: '#007bff' }}><img src={devIcon} />Web Development</Header>
                                    <div style={{ color: '#007bff' }} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat</div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="ui segment" style={{ backgroundColor: 'transparent' }}>
                                    <Header as='h3' style={{ color: '#F76AF8' }}><img src={designIcon} />Design</Header>
                                    <div style={{ color: '#F76AF8' }} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat</div>
                                </div>
                            </div>
                        </div>
                        <div className="ui two column grid stackable">
                            <div className="column">
                                <div className="ui segment" style={{ backgroundColor: 'transparent' }}>
                                    <Header as='h3' style={{ color: '#6f42c1' }}><img src={photoIcon} />Photography</Header>
                                    <div style={{ color: '#6f42c1' }} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat</div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="ui segment" style={{ backgroundColor: 'transparent' }}>
                                    <Header as='h3' style={{ color: '#e83e8c' }}><img src={managementIcon} />Management</Header>
                                    <div style={{ color: '#e83e8c' }} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laborum libero voluptatem autem consequatur sapiente molestias obcaecati est repellat</div>
                                </div>
                            </div>
                        </div>
                    </Segment>
                    <div className="ui divider"></div>
                        <div className="six wide computer column" style={{ fontFamily: 'Roboto mono', textAlign: 'center' }}>
                            <h1 style={{ color: '#E0E3EA' }}>Want to work together?</h1>
                                <h2>Let's have a chat_</h2>
                                <a style={{ position: 'relative', zIndex: '1' }} href="mailto:crystalpharma@gmail.com" target={"_blank"}><button className="ui teal inverted basic button">Email Me</button></a>
                        
                            <Image style={{ display: 'flex', justifyContent: 'center' }} size='medium' src={git}></Image>
                        </div>
                </Container>
            </Segment>
        </div>
    );
}

export default About;
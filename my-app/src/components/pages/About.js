import React from "react";
import { Container, Header } from 'semantic-ui-react'

function About() {
    return (
        <div>
            <Container text>
            
             <div class="ui people shape center">
                    <div class="sides">
                        <div class="active side">
                            <div class="ui card">
                                <div class="image">
                                    <img src="/images/avatar/large/steve.jpg" />
                                </div>
                                <div class="content">
                                    <div class="header">Crystal Leung</div>
                                    <div class="meta">
                                        <a>Frontend Web Developer</a>
                                    </div>
                                <div class="extra content">
                                    <span class="right floated">
                                        Joined in 2023
                                    </span>
                                    <span>
                                    <a className="active"><i class="address card outline icon"></i></a>
                                    </span>
                                    <span>
                                    <a><i class="envelope outline icon"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <h3 class="ui header"></h3>
                <Header as='h2'>About</Header>
                <div class="ui divider"></div>
                <p>
                    Hey there, I'm Crystal Leung
                    A compassionate and motivated Pharmacist with 5 years of experience. Currently, based in London providing professional services throughout England (South East and more) experience in various settings including: Online Pharmacy and Vaccination Clinic.
                    I am determined in delivering exceptional customer experiences and support pharmacy teams implementing business priorities.
                    At the moment, I am learning more on frontend web development and working in web development.
                </p>
            </Container>
        </div>
    );
}

export default About;
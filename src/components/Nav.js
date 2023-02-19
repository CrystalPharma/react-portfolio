import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Header, Container } from 'semantic-ui-react'
import '../App.css'

export default class Nav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Menu className='menu' style={{backgroundColor:'#1b1c1d'}}>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink
                                to="about"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="project"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Project
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="contact"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </Menu>
            </div>

        );
    }
}

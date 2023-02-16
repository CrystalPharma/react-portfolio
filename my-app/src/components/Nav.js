import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {  Menu, Button, Segment} from 'semantic-ui-react'

export default class Nav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
        const { activeItem } = this.state
    return (
        
        <Menu>
        <ul className="nav nav-tabs">
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
                    to="blog"
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
    );
}
}

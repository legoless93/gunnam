import React from 'react';
import '../App.css';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

const NavBar = createReactClass ({
    render() {
        return (

            <div>
                
                <div className="mainHeader">
                    <h1>Gun-Woo Nam</h1>
                </div>

                <Navbar inverse collapseOnSelect className="navbar">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">GunNam.io</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>

                        <Nav>
                            <LinkContainer to="/Apps">
                                <NavItem eventKey={1}>Apps</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/fullstack">
                                <NavItem eventKey={2}>Full Stack</NavItem>
                            </LinkContainer>
                        </Nav>

                        <Nav pullRight>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>


        )
    }

})

export default NavBar;
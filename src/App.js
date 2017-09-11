import React, { Component } from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">

            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
            <a href="#">Welcome To Gun-Woo Nam's Realm</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
            <NavItem eventKey={1} href="#">Apps</NavItem>
            <NavItem eventKey={2} href="#">Full Stack</NavItem>
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
        );
    }
}

export default App;

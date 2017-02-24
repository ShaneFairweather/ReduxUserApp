import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar fixedTop collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">InterReact</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Hello, User!</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
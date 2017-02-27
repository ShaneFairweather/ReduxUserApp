import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
    renderLinks() {
        if(this.props.authenticated) {
            return ([
                <Nav pullRight>
                    <NavItem eventKey={3}><Link to="/signout">Sign out</Link></NavItem>
                </Nav>,
                <Nav pullRight>
                    <NavItem eventKey={2}>Hello, <Link to="/settings">User</Link>!</NavItem>
                </Nav>

            ])
        } else {
            return (
                <Nav pullRight>
                    <NavItem eventKey={2}><Link to="/signin">Sign In</Link></NavItem>
                </Nav>
            )
        }
    }

    render() {
        return (
            <Navbar fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">InterReact</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {this.renderLinks()}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state.signin)
    return {
        authenticated: state.signin.authenticated
    }
}

export default connect(mapStateToProps)(Header);
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import jwtDecode from 'jwt-decode';

class Header extends Component {
    renderLinks() {
        if(this.props.authenticated) {
            const decoded = jwtDecode(localStorage.token)
            console.log(decoded);
            return ([
                <Nav pullRight key="signout" id="signout">
                    <NavItem eventKey={3} className="rbLink signoutLink"><Link to="/signout">Sign out</Link></NavItem>
                </Nav>,
                <Nav pullRight key="greetUser" id="greetUser">
                    <NavItem eventKey={2} className="rbLink"><Link to="/account"><img src={decoded.avatar} alt="headerImg" />&nbsp;{decoded.username}</Link></NavItem>
                </Nav>

            ])
        } else {
            return (
                <Nav pullRight>
                    <NavItem eventKey={2} className="rblink"><Link to="/signin">Sign In</Link></NavItem>
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
    // console.log(state)
    return {
        authenticated: state.signin.authenticated
    }
}

export default connect(mapStateToProps)(Header);
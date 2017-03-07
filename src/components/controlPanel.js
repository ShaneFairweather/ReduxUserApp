import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import portrait from '../img/portrait.png'
import jwtDecode from 'jwt-decode';


class ControlPanel extends Component {

    componentWillReceiveProps() {
        console.log(this.props.authenticated);
    }


    render() {
        if (this.props.authenticated) {
            const decoded = jwtDecode(localStorage.token);
            console.log(decoded);
            return (
                <ListGroup id="controlPanel">
                    <ListGroupItem id="portrait">
                        <img className="img-responsive center-block" src={decoded.avatar} alt="userImg"/>
                        <h5>User</h5>
                    </ListGroupItem>
                    <Link className="secondLink" to="/"><ListGroupItem>Feed</ListGroupItem></Link>
                    <Link className="thirdLink" to="/account"><ListGroupItem>Profile Settings</ListGroupItem></Link>
                    <Link className="lastLink" to="/blog"><ListGroupItem>Blog</ListGroupItem></Link>
                </ListGroup>
            )
        } else {
            return (
                <Panel className="loginControlPanel">
                    <h2>InterReact</h2>
                    <h3><Link to="/signin">Log in</Link> or <Link to="/signup">create an account</Link> to make posts
                    </h3>
                </Panel>
            )
        }
    }
}

function mapStateToProps(state) { 
    console.log(state.signin.authenticated);
    return { 
        authenticated: state.signin.authenticated 
    } }  

export default connect(mapStateToProps)(ControlPanel);
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import portrait from '../img/portrait.png'

class ControlPanel extends Component {
    render() {
        if (this.props.authenticated) {
            return (
                <ListGroup>
                    <ListGroupItem id="portrait">
                        <img src={portrait} height="180px" alt="userImg"/>
                        <h5>User</h5>
                    </ListGroupItem>
                    <Link className="secondLink" to="/"><ListGroupItem>Feed</ListGroupItem></Link>
                    <Link className="thirdLink" to="/account"><ListGroupItem>Profile Settings</ListGroupItem></Link>
                    <Link className="lastLink" to="/blog"><ListGroupItem>Blog</ListGroupItem></Link>
                </ListGroup>
            )
        } else {
            return (
                <Panel>
                    <h3><Link to="/signin">Log in</Link> or <Link to="/signup">create an account</Link> to make posts
                    </h3>
                </Panel>
            )
        }
    }
}

function mapStateToProps(state) { 
    return { 
        authenticated: state.signin.authenticated 
    } }  

export default connect(mapStateToProps)(ControlPanel);
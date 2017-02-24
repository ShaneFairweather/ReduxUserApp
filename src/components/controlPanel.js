import React from 'react';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import { Link } from 'react-router';
import portrait from '../img/portrait.png'

const ControlPanel = () => {
    if(3 < 4) {
        return (
            <Panel>
                <h3><Link to="/signin">Log in</Link> or <Link to="/register">create an account</Link> to make posts</h3>
            </Panel>
        )
    } else {
        return (
            <ListGroup>
                <ListGroupItem id="portrait">
                    <img src={portrait} height="180px" alt="userImg"/>
                    <h5>User</h5>
                </ListGroupItem>
                <Link to="/"><ListGroupItem>Feed</ListGroupItem></Link>
                <Link to="/account"><ListGroupItem>Profile Settings</ListGroupItem></Link>
                <Link to="/blog"><ListGroupItem>Blog</ListGroupItem></Link>
            </ListGroup>
        )
    }
}

export default ControlPanel;
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';
import portrait from '../img/portrait.png'

const ControlPanel = () => {
    return (
        <ListGroup>
            <ListGroupItem id="portrait">
                <img src={portrait} height="180px" alt="userImg" />
                <h5>User</h5>
            </ListGroupItem>
            <Link to="/"><ListGroupItem>Feed</ListGroupItem></Link>
            <Link to="/account"><ListGroupItem>Profile Settings</ListGroupItem></Link>
            <Link to="/blog"><ListGroupItem>Blog</ListGroupItem></Link>
        </ListGroup>
    )

}

export default ControlPanel;
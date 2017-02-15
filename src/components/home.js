import React, { Component } from 'react';

import { Col } from 'react-bootstrap';
import '../App.css';
import PostList from '../containers/post-list';
import PostForm from '../components/post-form';

class Home extends Component {
    render() {
        return (
            <Col xs={12} md={6}>
                <PostForm />
                <PostList />
            </Col>
        );
    }
}

export default Home;

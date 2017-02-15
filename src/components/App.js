import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import '../App.css';
import Header from '../components/header';
import PostList from '../containers/post-list';
import PostDetail from '../containers/post-detail';
import PostForm from '../components/post-form';
import Panel from '../components/panel';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <div className="container">
              <Grid>
                <Row>
                    <Col xs={12} md={4}>
                        <Panel />
                    </Col>
                    <Col xs={12} md={4}>
                        <PostForm />
                        <PostList />
                    </Col>
                    <Col xs={12} md={4}>
                        <PostDetail />
                    </Col>
                </Row>
              </Grid>
          </div>
      </div>
    );
  }
}

export default App;

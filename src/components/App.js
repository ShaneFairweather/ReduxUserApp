import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../App.css';
import Header from '../components/header';
import Footer from './footer'
import PostDetail from '../containers/friends-list';
import ControlPanel from './controlPanel';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <div id="main" className="container">
              <Grid>
                <Row>
                    <Col xs={12} md={3}>
                        <ControlPanel />
                    </Col>
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionEnterTimeout={400}
                        transitiionLeaveTimeout={400}>
                        {this.props.children}
                    </ReactCSSTransitionGroup>
                    <Col xs={12} md={3}>
                        <PostDetail />
                    </Col>
                </Row>
              </Grid>
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../App.css';
import Header from './header';
import Footer from './footer'
import UserList from './user-list';
import ControlPanel from './controlPanel';



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
                    {this.props.children}
                    <Col xs={12} md={3}>
                        <UserList />
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

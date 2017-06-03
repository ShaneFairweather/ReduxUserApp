import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../App.css';
import Header from './header';
import Footer from './footer'
import UserList from './user-list';
import ControlPanel from './controlPanel';
import { connect } from 'react-redux';
import { getUsers } from '../actions/actions_index';
import { bindActionCreators } from 'redux';


class App extends Component {

    componentWillMount() {
        this.props.getUsers();
    }

    componentDidMount() {
        console.log(this.props.users)
    }

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
                        <UserList users={this.props.users}/>
                    </Col>
                </Row>
              </Grid>
          </div>
          <Footer />
      </div>
    );
  }
}

// export default App;

function mapStateToProps(state) {
    return { users: state.users.all }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getUsers }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
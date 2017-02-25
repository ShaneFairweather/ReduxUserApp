import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions_index';

class Signout extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }
    render() {
        return <div>Successfully logged out</div>
    }
}

export default connect(null, actions)(Signout);
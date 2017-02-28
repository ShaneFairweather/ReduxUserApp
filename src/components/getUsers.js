import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions_index';

class GetUsers extends Component {
    componentWillMount() {
        this.props.getUsers();
    }
    render() {
        return <div>Users</div>
    }
}

export default connect(null, actions)(GetUsers);
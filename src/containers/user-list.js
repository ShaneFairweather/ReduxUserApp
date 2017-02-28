import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/actions_index';
import axios from 'axios';

class UserList extends Component {
    componentWillMount() {
        this.props.getUsers();
    }

    renderUsers() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id}>
                    {user.username}
                </li>
            )
        })
    }

    render() {
        return (
            <Panel>
                <h3>Users</h3>
                <ul>
                    {this.renderUsers()}
                </ul>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return { users: state.users.all };
}

export default connect(mapStateToProps, actions)(UserList);

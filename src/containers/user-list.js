import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as actions from '../actions/actions_index';
import { getUsers } from '../actions/actions_index';

class UserList extends Component {
    componentWillMount() {
        this.props.getUsers();
    }

    componentDidMount() {
        this.props.getUsers();
    }



    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps);
    //     if(nextProps.value !== this.props.value)
    //         this.props.getUsers();
    // }

    renderUsers() {
        return this.props.users.map((user) => {
            return (
                <ListGroupItem key={user._id}>
                    <div>
                        <img className="userListIcon" src={user.avatar} alt="userImg"  height="25" />
                        &nbsp; {user.username}
                    </div>
                </ListGroupItem>
            )
        })
    }

    render() {
        return (
            <Panel>
                <h3>Users</h3>
                <ListGroup id="userList">
                    {this.renderUsers()}
                </ListGroup>
            </Panel>
        )
    }
}


function mapStateToProps(state) {
    // console.log(state);
    return { users: state.users.all }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getUsers }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);

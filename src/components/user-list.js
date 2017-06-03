import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

const UserList = (props) => {
    const renderUsers = () => {
        return props.users.map((user) => {
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

     return (
        <Panel>
            <h3>Users</h3>
            <ListGroup className="userList">
                {renderUsers()}
            </ListGroup>
        </Panel>
    )
}

export default UserList;
// import React, { Component } from 'react';
// import { Panel } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// // import * as actions from '../actions/actions_index';
// import { getUsers } from '../actions/actions_index';
//
// class UserList extends Component {
//     componentWillMount() {
//         this.props.getUsers();
//         // console.log(this.props.dispatch);
//         // console.log("=====componentwillmount======")
//         // console.log(this.props.getUsers())
//         // console.log("=====componentwillmount======")
//
//     }
//
//
//     renderUsers() {
//         return this.props.users.map((user) => {
//             return (
//                 <li key={user.id}>
//                     {user.username}
//                 </li>
//             )
//         })
//     }
//
//     render() {
//         return (
//             <Panel>
//                 <h3>Users</h3>
//                 <ul>
//                     {this.renderUsers()}
//                 </ul>
//             </Panel>
//         )
//     }
// }
//
//
// function mapStateToProps(state) {
//     console.log(state.users);
//     return { users: state.users.all }
// }
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ getUsers }, dispatch);
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(UserList);
"use strict";

//# sourceMappingURL=user-list-compiled.js.map
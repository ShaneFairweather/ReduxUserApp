import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addPost } from '../actions/actions_index';
import { bindActionCreators } from 'redux';
import { Button, ButtonToolbar, Panel }  from 'react-bootstrap';
import * as actions from '../actions/actions_index';
// import { reduxForm, Field } from 'redux-form';



class PostList extends Component {


    componentWillMount(newProps) {
        this.props.getPosts();
        // console.log("=====componentwillmount======")
        // console.log(this.props.getPosts())
        // console.log("=====componentwillmount======")
    }

    // componentWillReceiveProps() {
    //     this.props.getPosts();
    // }

    renderList() {
        // console.log(this.props.posts);
        return this.props.posts.map((post) => {
            return (
                <Panel key={post._id} className='post'>
                    <h3>{post.author}</h3>
                    <p>{post.content}</p>
                </Panel>
            )
        })
    }
    render() {
        return (
            <div>
                <div className="postList">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

// Add props to PostList container
function mapStateToProps(state) {
    // console.log(state.posts);
    return {
        posts: state.posts.all.reverse()
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
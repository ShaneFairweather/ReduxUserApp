import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addPost } from '../actions/actions_index';
import { bindActionCreators } from 'redux';
import { Button, ButtonToolbar, Panel }  from 'react-bootstrap';
import * as actions from '../actions/actions_index';
// import { reduxForm, Field } from 'redux-form';



class PostList extends Component {


    componentWillMount() {
        this.props.getPosts();
    }

    renderList() {
        return this.props.posts.map((post) => {
            return (
                <Panel key={post._id} className='post'>
                    <div className="innerPost">
                        <div>
                            <img className="postAvatar" src={post.avatar} alt="userAvatar" />
                            <h4 className="postAuthor">{post.author}</h4>
                            <small>{post.date}</small>
                        </div>
                        <div className="postBody">{post.content}</div>
                    </div>
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
    return {
        posts: state.posts.all.reverse()
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
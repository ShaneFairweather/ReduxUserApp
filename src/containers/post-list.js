import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/actions_index';
import { bindActionCreators } from 'redux';
import { Button, ButtonToolbar, Panel }  from 'react-bootstrap';
import * as actions from '../actions/actions_index';


class PostList extends Component {

    componentWillMount() {
        this.props.getPosts();
        console.log("=====componentwillmount======")
        console.log(this.props.getPosts())
        console.log("=====componentwillmount======")

    }

    renderList() {
        return this.props.posts.map((post) => {
            return (
                <Panel key={post._id} className='post'>
                    <h3>{post.author}</h3>
                    <p>{post.content}</p>
                    <ButtonToolbar>
                        <Button
                            onClick={() => this.props.addPost(post)}
                            className="btn">
                            Add Post
                        </Button>
                    </ButtonToolbar>
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
    console.log(state.posts);
    return {
        posts: state.posts.all
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
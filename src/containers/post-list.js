import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/actions_index';
import { bindActionCreators } from 'redux';

class PostList extends Component {
    renderList() {
        return this.props.posts.map((post) => {
            return (
                <li key={post.author + post.content} className='post'>{post.author}: {post.content}
                    <button
                        onClick={() => this.props.addPost(post)}
                        className="btn">
                        Add Post
                    </button>

                </li>
            )
        })
    }
    render() {
        return (
            <div>
                <ul className="postList">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

// Add props to PostList container
function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addPost: addPost }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/actions_index';
import { bindActionCreators } from 'redux';
import { Button, ButtonToolbar, ControlLabel, ListGroupItem, ListGroup, Panel }  from 'react-bootstrap';

class PostList extends Component {
    renderList() {
        return this.props.posts.map((post) => {
            return (
                <Panel key={post.author + post.content} className='post'>
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
                <ListGroup className="postList">
                    {this.renderList()}
                </ListGroup>
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
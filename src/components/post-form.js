import React, { Component } from 'react';
import { Button, ButtonToolbar, Form, FormGroup, Panel }  from 'react-bootstrap';
import { FormControl }  from 'react-bootstrap';
import { reduxForm, Field, reset } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions/actions_index';
import jwtDecode from 'jwt-decode';

const emptyForm = (result, dispatch) =>
    dispatch(reset('postForm'));


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <FormControl id="addPost" className="input" componentClass="textarea" {...input} placeholder="Write your post here" type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const validate = values => {
    const errors = {}
    if (values.content.length < 1) {
        errors.content = 'Content Required'
    }
    return errors
}


class PostForm extends Component {
    handleFormSubmit(formProps) {
        const {resetForm} = this.props;
        const decoded = jwtDecode(localStorage.token)
        console.log(decoded);
        formProps.author = decoded.username;
        formProps.avatar = decoded.avatar;
        console.log(formProps);
        this.props.updatePosts(formProps);
    }

    render() {
        const { handleSubmit, validate } = this.props;
        if(this.props.authenticated) {
            return (
                <Panel>
                    <h3>Add a post</h3>
                    <Form id="postForm" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <FormGroup controlId="postContent">
                            {/*<FormControl componentClass="textarea" placeholder="Enter post content"/>*/}
                            <Field
                                name="content"
                                component={renderField}
                                type="textarea"/>
                        </FormGroup>
                        {validate}
                        <ButtonToolbar>
                            <Button
                                className="postSubmit"
                                type="submit">
                                Add post
                            </Button>
                        </ButtonToolbar>
                    </Form>
                </Panel>
            )
        } else {
            return null
        }
    }
}


function mapStateToProps(state) {
    // console.log(state)
    return {
        authenticated: state.signin.authenticated,

    }
}

PostForm = reduxForm({
    form: 'postForm',
    onSubmitSuccess: emptyForm,
})(PostForm);

export default connect(mapStateToProps, actions)(PostForm);
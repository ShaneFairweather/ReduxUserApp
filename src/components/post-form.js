import React, { Component } from 'react';
import { Button, ButtonToolbar, Form, FormGroup, Panel }  from 'react-bootstrap';
import { FormControl }  from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions/actions_index';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)


class PostForm extends Component {
    handleFormSubmit(formProps) {
        // this.props.signinUser({ email, password });
        this.props.addPost(formProps);
    }

    render() {
        const { handleSubmit } = this.props;

        if(this.props.authenticated) {
            return (
                <Panel>
                    <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <FormGroup controlId="postContent">
                            {/*<FormControl componentClass="textarea" placeholder="Enter post content"/>*/}
                            <Field
                                name="content"
                                component={renderField}
                                type="textarea"
                                label="Content"
                                placeholder="Content"/>
                        </FormGroup>
                        <ButtonToolbar>
                            <Button type="submit">
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
    console.log(state)
    return {
        authenticated: state.signin.authenticated,

    }
}

PostForm = reduxForm({
    form: 'postForm',
})(PostForm);

export default connect(mapStateToProps, actions)(PostForm);
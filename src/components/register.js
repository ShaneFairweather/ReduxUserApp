import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Panel, Col, ButtonToolbar, Button, FormGroup, Form } from 'react-bootstrap';
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


const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Email Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.username) {
        errors.username = 'Username Required'
    } else if (values.username.length < 4) {
        errors.username = "Username must be at least 4 characters"
    }
    if (!values.password) {
        errors.password = 'Password Required'
    }
    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Confirm Password'
    }
    if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = 'Passwords do not match'
    }
    return errors
}



class Register extends Component {
    handleFormSubmit(formProps) {
        // this.props.signinUser({ email, password });
        console.log(formProps);
        this.props.signupUser(formProps);
        this.props.getUsers();
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    {this.props.errorMessage}
                </div>
            )
        }
    }

    render() {
        const { handleSubmit, validate } = this.props;

        return (
            <Col xs={12} md={6}>
                <Panel>
                    <h2>Create an Account</h2>
                    <hr/>
                    {this.renderAlert()}
                    <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <FormGroup controlId="signupEmail">
                            <Field
                                name="email"
                                component={renderField}
                                type="text"
                                label="Email"
                                placeholder="Email"/>
                        </FormGroup>
                        {validate}
                        <FormGroup controlId="signupUsername">
                            <Field
                                name="username"
                                component={renderField}
                                type="text"
                                label="Username"
                                placeholder="Username"/>
                        </FormGroup>
                        <FormGroup controlId="signupPassword">
                            <Field
                                name="password"
                                component={renderField}
                                type="password"
                                label="Password"
                                placeholder="Password"/>
                        </FormGroup>
                        <FormGroup controlId="passwordConfirm">
                            <Field
                                name="passwordConfirm"
                                component={renderField}
                                type="password"
                                label="Confirm Password"
                                placeholder="Confirm Password"/>
                        </FormGroup>
                        <ButtonToolbar>
                            <Button type="submit">
                                Sign Up
                            </Button>
                        </ButtonToolbar>
                    </Form>
                </Panel>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.signin.error }
}

Register = reduxForm({
    form: 'register',
    validate
})(Register);

export default connect(mapStateToProps, actions)(Register);
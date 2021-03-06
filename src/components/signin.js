import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Panel, Col, ButtonToolbar, Button, FormGroup, Form, ControlLabel, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/actions_index';
import { Link } from 'react-router';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} className="input" placeholder={label} type={type}/>
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
    } else if (values.username.length < 3) {
        errors.username = "Username must be at least 3 characters"
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


class Signin extends Component {
    handleFormSubmit({ email, password }) {
        // console.log(email);
        this.props.signinUser({ email, password });
        // this.props.checkAuth({ email, password });

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
        const { handleSubmit } = this.props;

        return (
            <Col xs={12} md={6}>
                <Panel>
                    <h2>Sign In</h2>
                    <hr/>
                    {this.renderAlert()}
                    <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <FormGroup controlId="signinEmail">
                            {/*<ControlLabel>Email</ControlLabel>*/}
                            <Field
                                name="email"
                                component={renderField}
                                type="text"
                                label="Email"
                                placeholder="Email"/>
                        </FormGroup>
                        <FormGroup controlId="signinPassword">
                            {/*<ControlLabel>Password</ControlLabel>*/}
                            <Field
                                name="password"
                                component={renderField}
                                type="password"
                                label="Password"
                                placeholder="Password"/>
                        </FormGroup>
                        {/*<FormGroup>*/}
                            {/*<Checkbox>Remember me</Checkbox>*/}
                        {/*</FormGroup>*/}
                        <ButtonToolbar>
                            <Button type="submit">
                                Log In
                            </Button>
                        </ButtonToolbar>
                    </Form>
                    <br />
                    <Link to="/signup">Don't have an account?</Link>
                </Panel>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.signin.error }
}

Signin = reduxForm({
    form: 'signin'
})(Signin);

export default connect(mapStateToProps, actions)(Signin);






































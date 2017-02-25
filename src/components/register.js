import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Panel, Col, ButtonToolbar, Button, FormGroup, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/actions_index';

const renderInput = field =>
    <div>
        <input {...field.input} type={field.type}/>
        {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </div>

class Register extends Component {
    handleFormSubmit({ email, password }) {
        // console.log(email);
        this.props.signinUser({ email, password });

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
                    <h2>Create an Account</h2>
                    <hr/>
                    {this.renderAlert()}
                    <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <FormGroup controlId="signinEmail">
                            <Field
                                name="email"
                                component={renderInput}
                                type="text"
                                placeholder="Email"/>
                        </FormGroup>
                        <FormGroup controlId="signinPassword">
                            <Field
                                name="password"
                                component={renderInput}
                                type="password"
                                placeholder="Password"/>
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
    form: 'register'
})(Register);

export default connect(mapStateToProps, actions)(Register);
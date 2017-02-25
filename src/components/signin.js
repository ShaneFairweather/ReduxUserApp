import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { reducer as formReducer } from 'redux-form';
import { Panel, Col, ButtonToolbar, Button, FormGroup, FormControl, Form } from 'react-bootstrap';
import * as actions from '../actions/actions_signIn';

const renderInput = field =>
    <div>
        <input {...field.input} type={field.type}/>
        {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </div>

class Signin extends Component {
    handleFormSubmit({ email, password }) {
        console.log(email);
        console.log(password);
        this.props.signinUser({ email, password });

    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <Col xs={12} md={6}>
                <Panel>
                    <h2>Sign In</h2>
                    <hr/>
                    <br/>
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
                                Log In
                            </Button>
                        </ButtonToolbar>
                    </Form>
                </Panel>
            </Col>
        )
    }
}

export default reduxForm({
    form: 'signin'
}, null, actions)(Signin);


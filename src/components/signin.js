import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { reducer as formReducer } from 'redux-form';
import { Panel, ButtonToolbar, Button, FormGroup, FormControl, Form } from 'react-bootstrap';

class Signin extends Component {
    handleFormSubmit({email, password}) {
        console.log(email, password);
    }

    render() {
        const {handleSubmit, fields: {email, password}} = this.props;

        return (
            <Panel>
                <h2>Sign In</h2>
                <hr/>
                <br/>
                <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <FormGroup controlId="signinEmail">
                        <FormControl componentClass="input" placeholder="Email"/>
                    </FormGroup>
                    <FormGroup controlId="signinPassword">
                        <FormControl componentClass="input" placeholder="Password"/>
                    </FormGroup>
                    <ButtonToolbar>
                        <Button action="submit" type="submit">
                            Log In
                        </Button>
                    </ButtonToolbar>
                </Form>
            </Panel>
        )
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);


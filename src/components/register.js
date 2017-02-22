import React from 'react';
import { reducer as formReducer } from 'redux-form';

const Register = () => {
    return (
        <Col xs={12} md={6}>
            <Panel>
                <h2>My Account</h2><hr/><br/>
                <h4>Profile picture</h4>
                <img src={portrait} alt="profileImg" />
                <ButtonToolbar>
                    <Button type="submit">
                        Upload new picture
                    </Button>
                </ButtonToolbar><br/><hr/>
                <h4>Change Password</h4>
                <Form>
                    <FormGroup controlId="formInlineName">
                        <FormControl componentClass="input" placeholder="New password" />
                    </FormGroup>
                    <FormGroup controlId="formInlineName">
                        <FormControl componentClass="input" placeholder="Repeat password" />
                    </FormGroup>
                    <ButtonToolbar>
                        <Button type="submit">
                            Change password
                        </Button>
                    </ButtonToolbar>
                </Form>
            </Panel>
        </Col>
    )
}

export default Register;
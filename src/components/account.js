import React from 'react';
import { Panel, Col, ButtonToolbar, Button, FormControl, FormGroup, Form } from 'react-bootstrap';
import portrait from '../img/portrait.png';
import jwtDecode from 'jwt-decode';



const Account = () => {
    const decoded = jwtDecode(localStorage.token);
    console.log(decoded);
    return (
    <Col xs={12} md={6}>
        <Panel>
            <h2>My Account</h2><hr/><br/>
            <h4>Profile picture</h4>
            <img src={decoded.avatar} alt="profileImg" />
            <ButtonToolbar>
                <Button type="submit">
                    Upload new picture
                </Button>
            </ButtonToolbar><br/><hr/>
            <h4>Change Password</h4>
            <Form>
                <FormGroup controlId="formInlineName">
                    <FormControl componentClass="input" placeholder="New password" type="password" />
                </FormGroup>
                <FormGroup controlId="formInlineName">
                    <FormControl componentClass="input" placeholder="Repeat password" type="password" />
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

export default Account;
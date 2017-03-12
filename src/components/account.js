import React from 'react';
import { Panel, Col, ButtonToolbar, Button, FormControl, FormGroup, Form } from 'react-bootstrap';
import portrait from '../img/portrait.png';
import jwtDecode from 'jwt-decode';
import Dropzone from 'react-dropzone';



const Account = () => {
    const decoded = jwtDecode(localStorage.token);
    console.log(decoded);
    return (
    <Col xs={12} md={6}>
        <Panel className="account">
            <h2>My Account</h2><hr/>
            <div className="avatarContainer">
                <h4>Profile picture</h4>
                <img src={decoded.avatar} alt="profileImg" />
                <ButtonToolbar>
                    <Button type="submit">
                        Upload new picture
                    </Button>
                </ButtonToolbar>
            </div>
            <hr/>
            <div className="passwordContainer">
            <h4>Change Password</h4>
                <Form>
                    <FormGroup controlId="formInlineName">
                        <FormControl componentClass="input" placeholder="New password" type="password" />
                    </FormGroup>
                    <FormGroup controlId="formInlineName">
                        <FormControl componentClass="input" placeholder="Repeat password" type="password" />
                    </FormGroup>
                    <ButtonToolbar>
                        <Button>
                            Change password
                        </Button>
                    </ButtonToolbar>
                </Form>
            </div>
        </Panel>
    </Col>
    )
}

export default Account;





import React from 'react';
import { Button, ButtonToolbar, Form, FormGroup, ControlLabel, Panel }  from 'react-bootstrap';
import { FormControl }  from 'react-bootstrap';


const PostForm = () => {
    return (
        <Panel>
            <Form>
                <FormGroup controlId="formInlineName">
                    <FormControl componentClass="textarea" placeholder="textarea" />
                </FormGroup>
                <ButtonToolbar>
                    <Button type="submit">
                        Add post
                    </Button>
                </ButtonToolbar>
            </Form>
        </Panel>
    )
}


export default PostForm;
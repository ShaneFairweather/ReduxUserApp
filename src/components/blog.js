import React from 'react';
import { Col, Panel, Form, FormGroup, FormControl, ButtonToolbar, Button } from 'react-bootstrap';

const Blog = () => {
    return (
        <Col xs={12} md={6}>
            <Panel>
                <h2>My Blog</h2>
                <h5>Your personal space to post your content. Others can view your blog, but are unable to add posts here.</h5>
            </Panel>
            <Panel>
                <h4>New Post</h4>
                <Form>
                    <FormGroup controlId="formInlineName">
                        <FormControl componentClass="textarea" placeholder="Add post content" />
                    </FormGroup>
                    <ButtonToolbar>
                        <Button type="submit">
                            Add post
                        </Button>
                    </ButtonToolbar>
                </Form>
            </Panel>
        </Col>
    )
}

export default Blog;
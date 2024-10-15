import React from "react";
import './AdminLogin.css'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminLogin(){
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={12}>
                    <div className="h-100 float-sm-start ">
                        <h2 className="text-center fw-bold">Welcome Admin! Please Log In To Continue</h2>
                        <Form className="mt-5">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="fw-bold">Email</Form.Label>
                                <Form.Control className="border border-dark border-2" type="email" placeholder="Enter Email Here" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="mt-4 mb-4">
                                <Form.Label className="fw-bold">Password</Form.Label>
                                <Form.Control className="border border-dark border-2" type="password" placeholder="Enter Password Here" />
                            </Form.Group>

                            <Button variant="secondary" type="submit" className="w-100 mt-3 fw-bold">
                                Login
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default AdminLogin;
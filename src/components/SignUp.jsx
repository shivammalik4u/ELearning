import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import backgroundImg from '../Images/LoginBackground2.jpg'
import {
    Link
} from "react-router-dom";

const SignUp = () => {
    const backgroundImageStyle = {
        // backgroundImage: 'url("https://source.unsplash.com/random/1920x1080")',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <Container fluid style={backgroundImageStyle} className="p-0">
            <Form className="p-4 border rounded shadow text-dark" style={{ maxWidth: '400px', backdropFilter: 'blur(20px)' }}>
                <h2 className="text-center mb-4">SignUp</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                        Use special characters and numbers.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                    Sign Up
                </Button>

                <div className="mt-3 text-center">
                    <p className="mb-0">Have an account?</p>
                    <Button className="btn btn-success">
                        <Link className="text-decoration-none text-white" to="/Login">Log In here</Link>
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default SignUp;

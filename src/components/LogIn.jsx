import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import backgroundImg from '../Images/LoginBackground2.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css'; 


const LogIn = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const backgroundImageStyle = {
    // backgroundImage: 'url("https://source.unsplash.com/study/1920x1080")',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  };

  return (
    <Container fluid style={backgroundImageStyle} className="p-0">
      <Form className="p-4 border rounded shadow text-dark" style={{ maxWidth: '600px', width: '500px', backdropFilter: 'blur(20px)' }}>
        <h2 className="text-center mb-4">Login</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className="d-flex">
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />
            <Button
              variant="btn btn-primary"
              onClick={togglePasswordVisibility}
            >
              {showPassword ?  <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
            </Button>
          </div>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox" className="mb-3">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>

        <div className="mt-3 text-center">
          <p className="mb-0">Don't have an account?</p>
          <Button variant="success">
            <Link className="text-decoration-none text-white" to="/signup">Sign up</Link>
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default LogIn;

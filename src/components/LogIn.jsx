import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../Images/LoginBackground2.jpg';

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={backgroundImageStyle} className="container-fluid p-0">
      <form className="p-4 border rounded shadow text-dark" style={{ maxWidth: '600px', width: '500px', backdropFilter: 'blur(20px)' }}>
        <h2 className="text-center mb-4">Login</h2>
        <div className="form-group">
          <label htmlFor="formBasicEmail">Email address</label>
          <input type="email" className="form-control" id="formBasicEmail" placeholder="Enter email" />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="formBasicPassword">Password</label>
          <div className="d-flex">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="formBasicPassword"
              placeholder="Password"
            />
            <button
              type="button"
              className="btn btn-dark"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
            </button>
          </div>
        </div>

        <div className="form-group form-check mb-3">
          <input type="checkbox" className="form-check-input" id="formBasicCheckbox" />
          <label className="form-check-label" htmlFor="formBasicCheckbox">
            Remember me
          </label>
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Login
        </button>

        <div className="mt-3 text-center">
          <p className="mb-0">Don't have an account?</p>
          <button type="button" className="btn btn-dark">
            <Link className="text-decoration-none text-white" to="/Signup">Sign up</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;

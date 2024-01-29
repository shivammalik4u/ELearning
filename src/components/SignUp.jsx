import React from 'react';
import backgroundImg from '../Images/LoginBackground2.jpg';
import {
  Link
} from 'react-router-dom';

const SignUp = () => {
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
        <h2 className="text-center mb-4">SignUp</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" id="firstName" placeholder="First Name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile No.</label>
          <input type="tel" className="form-control" id="mobile" placeholder="Enter mobile" />
          <small className="form-text text-muted">
            We'll never share your mobile no. with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
          <small className="form-text text-muted">
            Use special characters and numbers.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
        </div>

        <button type="submit" className="btn btn-dark w-100 mt-3">
            <Link className="text-decoration-none text-white" to="/OTP">Send OTP</Link>
        </button>

        <div className="mt-3 text-center">
          <p className="mb-0">Have an account?</p>
          <button type="button" className="btn btn-dark">
            <Link className="text-decoration-none text-white" to="/Login">Log In</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

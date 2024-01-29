import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../Images/LoginBackground2.jpg';

const OTP = () => {

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
        <h2 className="text-center mb-4">OTP</h2>
        <div className="form-group">
          <label htmlFor="formBasicEmail">OTP</label>
          <input type="text" className="form-control" placeholder="Enter OTP" />
          <small className="form-text text-muted">
            Never share your OTP with anyone else.
          </small>
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Submit
        </button>

        <div className="mt-3 text-center">
          <p className="mb-0">Did,t get otp ?</p>
          <button type="button" className="btn btn-dark">
            Resend
          </button>
        </div>
      </form>
    </div>
  );
};

export default OTP;

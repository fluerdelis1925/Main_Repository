/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "./Footer";

// ForgotForm component representing the forgot password form
function ForgotForm({ onForgotPassword }) {
  const [email, setEmail] = useState(''); // State for email input
  const [otp, setOtp] = useState(''); // State for OTP input
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle the forgot password submission
  const handleForgot = (e) => {
    e.preventDefault();
    // Call the onForgotPassword prop with the email value
    onForgotPassword(email);
    console.log('Resetting password for email:', email);

    // Redirect to EmailForm page after handling the forgot password logic
    navigate('/EmailForm');
  };

  return (
    <div className="forgot-container">
      {/* Form section */}
      <div className="forgot-container">
        <form className="template-form" onSubmit={handleForgot}>
          {/* Back button */}
          <Link to="/login">
            <button className="wBackbutton">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>
            </button>
          </Link>
          {/* Title */}
          <h2 className="title">Forgot Password</h2>
          {/* Instructions */}
          <p>Please enter your email address to reset your password.</p>
          {/* Email input field */}
          <div className="email-input-field">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on change
            />
          </div>
          {/* OTP input field */}
          <div className="email-input-field">
            <div className="forgot-otp-input-container">
              <input
                type="text"
                id="OTP"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)} // Update OTP state on change
              />
              <button className="forgot-otp-button">
                Send
              </button>
            </div>
          </div>
          {/* Link to login page */}
          <Link to="/login">
            <div className="existing-account">
              Remember your password?
            </div>
          </Link>
          {/* Button to trigger verification */}
          <Link to="/new">
            <button className="TeamA-button">Verify</button>
          </Link>
        </form>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ForgotForm; // Exporting the ForgotForm component

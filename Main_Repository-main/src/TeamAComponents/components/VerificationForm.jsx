/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Auth.css";
// Import a CSS file for styling

// VerificationForm component responsible for rendering the email verification form
function VerificationForm({ onVerificationForm }) {
  const [verification, setVerification] = useState('');

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onVerificationForm(verification);
    console.log('Verification code submitted:', verification);
    // You can add further logic or redirection if needed
  };

  return (
    <div className="verification-forms-container">
      {/* Form section */}
      <form className="template-form" onSubmit={handleFormSubmit}>
        {/* Back button */}
        <Link to="/forgot" className="wBackbutton">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
          </button>
        </Link>
        {/* Title */}
        <h1 className="verification-title">Email Verification</h1>
        {/* Instruction */}
        <p className="center-text">Please enter Email</p>
        {/* Input field */}
        <div className="verification-input-field">
          <input
            type="email"
            placeholder="Email"
            id="verification"
            name="verification"
            value={verification}
            onChange={(e) => setVerification(e.target.value)}
            required
          />
          {/* Submit button */}
          <button type="submit" className="verification-button">Send</button>
        </div>
      </form>

      {/* Panels section (Additional content can be included here) */}
      <div className="verification-panels-container">
        {/* Any additional content you want to include */}
      </div>
    </div>
  );
}

export default VerificationForm;

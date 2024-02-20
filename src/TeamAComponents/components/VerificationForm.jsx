/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../styles/Auth.css";


function VerificationForm({ onVerificationForm }) {
  // State for storing the verification code

  const [verification, setVerification] = useState('');
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [resendStatus, setResendStatus] = useState(null);
  const [showResendButton, setShowResendButton] = useState(true);
  const [emailFromRegistration, setEmailFromRegistration] = useState('');
  const [resending, setResending] = useState(false);
  const [codeExpired, setCodeExpired] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [timeDifference, setTimeDifference] = useState(null);


  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
     // Pass the verification code to the parent component
    onVerificationForm(verification);
    // Log the verification code for debugging purposes
    console.log('Verification code submitted:', verification);
    // You can add further logic or redirection if needed

  };

  return (
    <div className="verification-forms-container">

       {/* Form for entering the verification code */}
      <form className="template-form" onSubmit={handleFormSubmit}>
         {/* Link to navigate back */}
        <Link to="/forgot" className="wBackbutton">
          <button>
            {/* SVG icon for arrow left */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
          </button>
        </Link>
        {/* Title for the email verification */}
        <h1 className="verification-title">Email Verification</h1>
        {/* Instructional text */}
        <p className="center-text">Please enter Email</p>
        {/* Container for the verification input field */}
        <div className="verification-input-field">

          {/* Input field for entering email */}
          <input
            type="email"
            placeholder="Email"
            id="verification"
            name="verification"
            value={verification}
            onChange={(e) => setVerification(e.target.value)}
            required
          />

          {/* Submit button for sending verification code */}
          <button type="submit" className="verification-button">Send</button>
        </div>
      </form>


      <div className="verification-panels-container">
        {verificationStatus && <p>{verificationStatus}</p>}
        {showResendButton && resendStatus && <p>{resendStatus}</p>}
      </div>
    </div>
  );
}

export default VerificationForm;

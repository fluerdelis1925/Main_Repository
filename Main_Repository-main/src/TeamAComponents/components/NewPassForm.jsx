import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./Footer";

// NewPassForm component for changing the password
function NewPassForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Function to toggle the visibility of the password
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle the confirmation password change
  const handleConfirmPasswordChange = (e) => {
    const confirmedPassword = e.target.value.trim();
    setConfirmPassword(confirmedPassword);

    // Check if passwords match and update error message accordingly
    if (newPassword.trim() !== '' && newPassword !== confirmedPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission if passwords match and are not empty
    if (newPassword === confirmPassword && newPassword.trim() !== '') {
      console.log('Password match! Submitting...');

      // Logic for form submission can be added here

      // Alert when the password is confirmed and the form is submitted successfully
      window.alert('Password confirmed! Form submitted successfully.');

    } else {
      console.error('Passwords do not match or are empty. Please check.');
    }
  };

  return (
    <div className="email-forms-container" style={{ fontFamily: 'sans-serif' }}>
      <form className="template-form" onSubmit={handleSubmit}>
        <Link to="/login">
          <button className="wBackbutton">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
          </button>
        </Link>
        <h2 className="title" style={{ fontSize: '20px' }}>Change Password</h2>
        <p style={{ marginTop: '10px' }}>Please Change Your Password Here</p>
        <div className="email-input-field">
          {/* Input field for entering new password */}
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter New Password here*"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setNewPasswordError('');
            }}
            onFocus={() => setNewPasswordError('')}
            required
          />
        </div>
        <div className="email-input-field" style={{ marginBottom: '20px' }}>
          {/* Input field for confirming new password */}
          <input
            style={{ marginTop: '5px' }}
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm New Password*"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onFocus={() => setConfirmPasswordError('')}
            required
          />
        </div>

        <div className='passstat'>
          {/* Display password match or error messages */}
          {newPassword === confirmPassword && newPassword.trim() !== '' && (
            <span style={{ color: 'green', fontSize: '14px' }}>Password match</span>
          )}

          {newPassword !== confirmPassword && confirmPassword.trim() !== '' && newPassword.trim() !== '' && (
            <span style={{ color: 'red', fontSize: '14px' }}>{confirmPasswordError || 'Password do not match'}</span>
          )}
        </div>

        <div style={{ marginTop: '-60px' }}>
          <Link to="/login">
            {/* Button to confirm password change */}
            <button className="Confirm-button">Confirm</button>
          </Link>
        </div>
      </form>

      <div className="email-panels-container">
        {/* Placeholder for additional content or image */}
        <div className="email-panel email-left-panel">
          <div className="content">
            {/* Add content for the left panel */}
          </div>
          <img src="your-image.png" className="email-image" alt="" />
        </div>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default NewPassForm;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NewPassForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmedPassword = e.target.value.trim();
    setConfirmPassword(confirmedPassword);

    if (newPassword.trim() !== '' && newPassword !== confirmedPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your form submission here
    if (newPassword === confirmPassword && newPassword.trim() !== '') {
      console.log('Password match! Submitting...');
      // Add your logic for form submission.

      // Show an alert when the password is confirmed
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
        <h2 className="email-title">Change Password</h2>
        <p>Please Change Your Password Here.</p>
        <label htmlFor="newPassword">
          <i className="fas fa-envelope"></i>
        </label>
        <div className="email-input-field" style={{ marginBottom: '20px' }}>
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
          <button type="button" className="toggle-button" onClick={handleTogglePassword}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <div className="email-input-field" style={{ marginBottom: '20px' }}>
          <input
            style={{ marginTop: '30px' }}
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

        {newPassword === confirmPassword && newPassword.trim() !== '' && (
          <span style={{ color: 'green', fontSize: '14px', marginTop: '35px', display: 'flex' }}>Passwords match</span>
        )}

        {newPassword !== confirmPassword && confirmPassword.trim() !== '' && newPassword.trim() !== '' && (
          <span style={{ color: 'red', fontSize: '14px', marginTop: '35px', display: 'block' }}>{confirmPasswordError || 'Passwords do not match'}</span>
        )}

        <div style={{ marginTop: '0px' }}>
          <Link to="/dashboard">
            <button type="submit" className="Confirm-button" style={{ backgroundColor: '#126912' }}>Confirm</button>
          </Link>
        </div>
      </form>

      <div className="email-panels-container">
        <div className="email-panel email-left-panel">
          <div className="content">
            {/* Add content for the left panel */}
          </div>
          <img src="your-image.png" className="email-image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default NewPassForm;

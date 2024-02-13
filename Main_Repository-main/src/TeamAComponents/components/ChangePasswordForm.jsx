/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function ChangePasswordForm() {
  const navigate = useNavigate();

  // Function to navigate back to the previous page
  const goBack = () => {
    navigate(-1);
  };
  
  // State variables for form inputs and error handling
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validate form inputs
    if (!email || !oldPassword || !newPassword || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password must match.');
      return;
    }
    
    // Perform form submission logic with the state values
    console.log('Form submitted:', { email, oldPassword, newPassword, confirmPassword });
    
    // Reset state and error after successful submission
    setEmail('');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setError('');
  };
    
  return (
    <div className="Change-wrapper">
      {/* Button to go back to the previous page */}
      <Link onClick={goBack}>
        <button className="Change-Backbutton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </button>
      </Link>
      {/* Left side content */}
      <div className="Change-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
        </svg>
        <h4>Name</h4>
        <p>Position name</p>
      </div>
      {/* Right side content */}
      <div className="Change-right">
        <div className="Change-info">
          <h3>Password</h3>
          <div className="Change-info_data">
            {/* Form inputs */}
            <div className="Change-data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="Change-data">
              <label htmlFor="oldPassword">Old Password</label>
              <input
                type="password"
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter Old Password"
                required
              />
            </div>
            <div className="Change-data">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter New Password"
                required
              />
            </div>
            <div className="Change-data">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>
          {/* Buttons for form submission and cancellation */}
          <div className="Change-buttons">
            <button className="submit-button" onClick={handleFormSubmit}>
              Save
            </button>
            <Link to="/profile">
              <button className="cancel-button">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordForm;

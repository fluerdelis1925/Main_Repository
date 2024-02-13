import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Auth.css";

function ProfileEditForm() {
  // State variables to store form data
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Hook to handle navigation
  const navigate = useNavigate();

  // Function to handle form submission and update profile
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Sending a PUT request to update the profile
      const response = await fetch(`http://localhost:8085/api/v1/update/${email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          username,
          firstName,
          lastName,
        }),
      });

      if (response.ok) {
        console.log('Profile updated successfully');
      } else {
        console.error('Profile update failed');
      }
    } catch (error) {
      console.error('Error during profile update:', error);
    }
  };
  
  return (
    <div className="Prof2-wrapper">
      {/* Back button */}
      <div>
        <Link to="/profile">
          <button className="Prof2-Backbutton">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
          </button>
        </Link>
      </div>
      {/* Profile information */}
      <div className="Prof2-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
        </svg>
        <h4>Name</h4>
        <p>Position name</p>
      </div>
      <div className="Prof2-right">
        {/* Profile form */}
        <div className="Prof2-info">
          <h3>Profile Information</h3>
          <form onSubmit={handleUpdate} className="Prof2-info_data">
            <div className="Prof2-data">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="Prof2-data">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
              />
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
          </form>
        </div>
        {/* Update and Cancel buttons */}
        <div className="Prof2-buttons">
          <button className="submit-button" onClick={handleUpdate}>
            Update
          </button>
          <Link to="/profile">
            <button className="cancel-button">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileEditForm;

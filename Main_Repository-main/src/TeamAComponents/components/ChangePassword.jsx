/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import ChangePasswordForm from './ChangePasswordForm'; // Import the ChangePasswordForm component
import { Link } from 'react-router-dom';
import "../styles/Auth.css";

function ChangePassword() { // Define the ChangePassword functional component
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="Change-navbar">
        <div className="home-header">
          <Link to='/'>
            {/* Company Logo */}
            <img
              src="..\src\assets\TeamAassets\companyLogo.png"
              alt="Logo"
              className="Qlogo"
            />
          </Link>
        </div>
        {/* Navigation Links */}
        <ul className="Change-nav-list">
          <li>
            {/* Home Link */}
            <Link to="/">
              <button className='login-button'>Home</button>
            </Link>
          </li>
        </ul>
      </nav>
      {/* Main Content */}
      <div className="Change-content">
        <div className="Change-sign">
          {/* Change Password Form */}
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}

export default ChangePassword; // Export the ChangePassword component

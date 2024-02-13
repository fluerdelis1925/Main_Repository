/* eslint-disable no-unused-vars */
import React from 'react';
import ForgotForm from './ForgotForm'; // Importing ForgotForm component
import { Link } from "react-router-dom";
import "../styles/Auth.css"; // Importing Auth.css for styling

// Forgot component representing the forgot password page
function Forgot() {
  return (
    <div className="forgot-container">
      {/* Header section */}
      <div className="home-header">
        <Link to='/'>
          <img
            src="..\src\assets\TeamAassets\companyLogo.png" 
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>
      {/* Navigation section */}
      <div className="forgot-navi">
        <div className="home-button">
          <Link to="/">
            <button className='login-button'>Home</button>
          </Link>
        </div>
      </div>
      {/* Content section */}
      <div className="forgot-content">
        <div className="forgot-sign">
          <ForgotForm /> {/* Displaying the ForgotForm component */}
        </div>
      </div>
    </div>
  );
}

export default Forgot; // Exporting the Forgot component

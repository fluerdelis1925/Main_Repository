/* eslint-disable no-unused-vars */
import React from 'react';
import EmailForm from './EmailForm'; // Importing EmailForm component
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation
import "../styles/Auth.css"; // Importing Auth.css for styling

function Email() {
  return (
    <div className="email-container"> {/* Container for email page */}
      <div className="home-header"> {/* Header section */}
        <img
          src="..\src\assets\TeamAassets\companyLogo.png"  // Logo image source
          alt="Logo"
          className="logo" // CSS class for logo styling
        />
      </div>
      <div className="email-navi"> {/* Navigation section */}
        <div className="home-button"> {/* Home button */}
          <Link to="/dashboard"> {/* Link to dashboard */}
            <button>Home</button> {/* Home button */}
          </Link>
        </div>
      </div>

      <div className="content"> {/* Main content section */}
        <div className="email-sign"> {/* Email form section */}
          <EmailForm /> {/* EmailForm component */}
        </div>
      </div>
    </div>
  );
}

export default Email;

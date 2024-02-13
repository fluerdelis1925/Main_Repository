import React from 'react';
import NewPassForm from './NewPassForm';
import { Link } from 'react-router-dom';
import "../styles/Auth.css"; // Importing Auth.css assuming it contains necessary styles

// TeamA_NewPass component for rendering the new password form
function TeamA_NewPass({ onNewPassForm }) {
  return (
    <div className="email-container">
      <div className="home-header">
        {/* Link to navigate back to the home page */}
        <Link to='/'>
          <img
            src="..\src\assets\TeamAassets\companyLogo.png" 
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>
      <div className="email-navi">
        {/* Navigation section (if any) */}
      </div>
      <div className="content">
        <div className="email-sign">
          {/* Render the NewPassForm component */}
          <NewPassForm onNewPassForm={onNewPassForm} />
        </div>
      </div>
    </div>
  );
}

export default TeamA_NewPass; // Export the TeamA_NewPass component

import React from 'react';
import NewPassForm from './NewPassForm';
import { Link } from 'react-router-dom';
import "../styles/Auth.css";
 // Assuming you want to include Auth.css

function TeamA_NewPass({ onNewPassForm }) {
  return (
    <div className="email-container">
     <div className="auth-header">
        
        <img
          src="..\src\assets\TeamAassets\companyLogo.png" 
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="email-navi">
        <div className="home-button">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>

      <div className="content">
        <div className="email-sign">
          <NewPassForm onNewPassForm={onNewPassForm} />
        </div>
      </div>
    </div>
  );
}

export default TeamA_NewPass;
import React from 'react';
import VerificationForm from './VerificationForm'; // Importing the VerificationForm component
import { Link } from 'react-router-dom';
import "../styles/Auth.css";

// Verification component responsible for rendering the verification form
function Verification({ onVerification }) {
  return (
    <div className="verification-container">
      {/* Header section */}
      <div className="verification-header">
        <img
          src="../../assets/TeamAassets/companyLogo.png"
          alt="Logo"
          className="verification-logo"
        />
      </div>
      
      {/* Navigation section */}
      <div className="verification-navi">
        <div className="home-button">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
      
      {/* Content section */}
      <div className="content">
        <div className="verification-sign">
          {/* Rendering the VerificationForm component and passing the onVerification function as a prop */}
          <VerificationForm onVerification={onVerification} />
        </div>
      </div>
    </div>
  );
}

export default Verification;

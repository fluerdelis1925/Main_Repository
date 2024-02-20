import React from 'react';
import VerificationForm from './VerificationForm'; // Correct import statement
import { Link } from 'react-router-dom';
import "../styles/Auth.css";

function Verification() { // Corrected function name
  return (
    <div className="verification-container">
      <div className="verification-header">

         {/* Logo */}
        <img
          src="../../assets/TeamAassets/companyLogo.png"
          alt="Logo"
          className="verification-logo"
        />

      </div>
      {/* Container for verification navigation */}
      <div className="verification-navi">

         {/* Home button */}
        <div className="home-button">
           {/* Link to home */}
          <Link to="/">
            {/* Home button */}
            <button>Home</button>

          </Link>
          </div>
      </div>
      <div className="content">
         {/* Verification sign */}
        <div className="verification-sign">

          {/* Verification form component */}
          <VerificationForm onVerification={onVerification} />{" "}
          {/* Corrected component name */}

        </div>
      </div>
    </div>
  );
}

export default Verification;

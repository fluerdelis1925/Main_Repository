import React from 'react';
import RegisterForm from './RegisterForm';
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function Register({ onNavigateHome }) {

  return (
    
    <div>

      {/* Home header with a link to the home page */}
      <div className="home-header">
        <Link to='/'> {/* Link to the home page */}
        <img
           src="..\src\assets\TeamAassets\companyLogo.png" {/* Image source */}
          alt="Logo" {/* Alternate text for the image */}
          className="Qlogo" {/* CSS class for styling */}
        />
        </Link>
      </div>
      {/* Authentication navigation with a button to navigate to the home page */}
      <div className="auth-navi">
        <div className="home-button">
          <Link to="/"> {/* Link to the home page */}
          <button className='login-button'>Home</button>
          </Link>
        </div>
      </div>
      {/* Container for the sign-up label */}

      <div className="label-container">
        <div className="container-under">
        <div className="auth-label">
          <h1>SIGN UP</h1> {/* Sign-up label */}
        </div>

          {/* Container for the sign-up content */}
      <div className="auth-content">
        <div className="auth-sign">
          <RegisterForm /> {/* Component containing the sign-up form */}
        </div>
      </div>
      </div>
      </div>
    </div>
  ); 
}

export default Register;
 

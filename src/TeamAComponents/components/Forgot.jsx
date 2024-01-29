/* eslint-disable no-unused-vars */
import React from 'react';
import LoginForm from './ForgotForm';
import { Link } from "react-router-dom";
import ForgotForm from './ForgotForm';
import Home from './Home';
import "../styles/Auth.css";

function Forgot() {

  return (
    <div className="forgot-container">
 <div className="auth-header">
        
        <img
          src="..\src\assets\TeamAassets\companyLogo.png" 
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="forgot-navi">
        <div className="home-button">
        <Link to="/">
          
            <button className='login-button'>Home</button>
           
          </Link>
        </div>
      </div>
      <div className="forgot-content">
        <div className="forgot-sign">
          <ForgotForm />
        </div>
      </div>
    </div>
  );
}

export default Forgot;
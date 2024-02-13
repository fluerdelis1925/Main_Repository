import React from 'react';
import LoginForm from './LoginForm'; // Importing LoginForm component
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import "../styles/Auth.css"; // Importing CSS styles

// Login component representing the login page of the application
function Login() {
  return (
    <div className="auth-container"> {/* Main container for the login page */}
      {/* Flex container for centering elements */}
      <div style={{display: "flex", justifyContent: "center"}}>
        {/* Column container for arranging elements */}
        <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
          <div> {/* Container for the authentication label */}
            {/* Authentication label */}
            <div className="auth-label">
              <h1>LOG IN</h1> {/* Heading for login */}
            </div>
          </div>
          {/* Container for authentication content */}
          <div className="auth-content">
            {/* Authentication sign section */}
            <div className="auth-sign">
              <LoginForm /> {/* LoginForm component for handling login form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; // Exporting the Login component

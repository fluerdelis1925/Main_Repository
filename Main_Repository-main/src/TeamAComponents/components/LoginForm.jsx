/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importing Link and useNavigate from react-router-dom
import { useAuth } from "./AuthContext"; // Importing useAuth from AuthContext
import Footer from './Footer'; // Importing Footer component

// LoginForm component representing the login form
function LoginForm() {
  // State variables for email, password, and error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Use the useAuth hook to get the handleLogin function
  const { handleLogin } = useAuth(); 
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Preventing default form submission
  
    try {
      console.log('Form submitted'); // Logging form submission for debugging
  
      // Calling handleLogin function from useAuth hook with email and password
      const result = await handleLogin({ email, password });
      
      // If login is successful, navigate to the dashboard
      if (result.success) {
        console.log('Login successful'); // Logging successful login for debugging
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Please try again.'); // Setting error message for invalid credentials
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again later.'); // Setting error message for unexpected errors
      console.error('Login failed:', error); // Logging error for debugging
    }
  };

  // Function to handle key press event (Enter key)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e); // Call handleSubmit function if Enter key is pressed
    }
  };

  return (
    <>
      {/* Login form */}
      <form onSubmit={handleSubmit} className="template-form">
        <h2 style={{ margin: '30px' }}>Sign In to Your Account and Be Part of the Success</h2>
        {/* Input field for email */}
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
        />
        {/* Input field for password */}
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress} // Handling key press event for Enter key
          placeholder="Password"
          required
        />
        {/* Remember me checkbox */}
        <div className="remember-me">
          {/* Your remember me checkbox */}
        </div>
        {/* Terms of Use and Privacy Policy */}
        <div>
          <h3 style={{ marginTop: '15px' }}>By clicking "Sign in," you agree to our Terms of Use and our Privacy Policy.</h3>
        </div>
        {/* Link to forgot password page */}
        <Link to="/forgot">
          <div className="forgot-password">
            Forgot your password?
          </div>
        </Link>
        {/* Sign in button */}
        <button  className="TeamA-button">Sign in</button>
        {/* Display error message if error exists */}
        {error && <div className="error-message">{error}</div>}
      </form>
    </>
  );
}

export default LoginForm; // Exporting the LoginForm component

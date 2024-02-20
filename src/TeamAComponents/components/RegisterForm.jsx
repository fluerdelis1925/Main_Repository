import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const navigate = useNavigate();
  const [passwordFocused, setPasswordFocused] = useState(false); // Track if the password field is focused

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$/;
    return passwordRegex.test(password);
  };


  // Function to handle changes in the user type selection
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);

  };

  // Function to handle changes in the password input
  const handlePasswordChange = (e) => {

    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword); // Validate the new password

  };

  // Function to handle focus on the password input
  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  // Function to handle blur on the password input
  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  // Function to handle form submission for registration
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setShowError(true);
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be 8 to 20 characters long with at least 1 uppercase, 1 numeric, and 1 symbol.');
      setShowError(true);
      return;
    }

    try {
      const mappedRole = role === 'INSTRUCTOR' ? 'INSTRUCTOR' : 'STUDENT';
      const response = await fetch('http://localhost:8085/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, firstName, lastName, userName, role: mappedRole }),
      });

      if (response.ok) {
        localStorage.setItem('email', email);
        setVerificationCodeSent(true);
        navigate('/verify');
      } else {
        const data = response.headers.get('Content-Type')?.includes('application/json') ? await response.json() : null;
        if (response.status === 409) {
          setError('User with this email or username already exists. Please use different credentials.');
        } else {
          setError(data?.message || 'Registration failed. Please try again.');
        }
        setShowError(true);
      }
    } catch (error) {

      // If an error occurs during registration, log the error and set an error message
      console.error('Error during registration:', error);

      setError('Registration failed. Please try again.');
      setShowError(true);
    }
  };

  const isPasswordValid = validatePassword(password);

  return (

    <>
      <form onSubmit={handleRegister} className="template-form">
        {/* Link to navigate back to the home page */}
        <Link to="/">
          <div className="qBackbutton">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
          </div>
        </Link>
        {/* Heading for signing up an account */}
        <h2>Sign up an account.</h2>
        {/* Heading for being part of the success */}
        <h2>Be part of the success.</h2>

        <div className="group_input">
          {/* Input field for username */}
          <input
            type="text"
            id="username"
            maxLength={20}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder={` Username(${userType === 'Student' ? 'Student' : userType})`}
          />
          <select
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
          >
            {/* Options for user types */}
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
          </select>
        </div>


      <div className="group_input">
        <input
          {/* Input field for the first name */}
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder={`Username (${role === 'Admin' ? 'Admin' : role})`}
          required
        />

        <input
          {/* Input field for the first name */}
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          /* Input field for the email address */}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        {/* Input field for the password */}
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          placeholder="Password"
        />
        <div className="data-validation">
          {/* Conditionally render the error label if showError state is true */}
          {showError && (
            <label style={{ color: 'red', fontSize: '15px', fontWeight: '700', transition: 'color 0.3s' }}>
              {error} {/* Display the error message */}
            </label>
          )}
        </div>

        <div>
          {/* Display the agreement text */}
          <h3 style={{ fontSize: '15px', marginTop: '20px' }}>By clicking Sign up you agree to our Terms of Use and our Privacy Policy.</h3>
        </div>
        
        {/* Link to the login page */}
        <Link to="/login">
          {/* Display text for existing account */}
          <div className="existing-account">
            Already have an account?
          </div>
        </Link>
        {/* Link to the email page */}
        <Link to='/Email'>
          {/* Sign up button */}
        <button className="TeamA-button" >Sign Up</button>
        </Link>
      </form>
      <Footer />
    </>

  );
}

export default RegisterForm;

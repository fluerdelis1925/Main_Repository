import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterForm({ openLoginModal, closeRegisterModal, openVerificationModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('STUDENT');
  const [error, setError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [showError, setShowError] = useState(false);
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    const isValid = passwordRegex.test(password);
    const errors = [];

    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push('Password must contain at least one uppercase letter.');
    }
    if (!/(?=.*\d)/.test(password)) {
      errors.push('Password must contain at least one numeric digit.');
    }
    if (!/(?=.*[!@#$%^&*()_+])/.test(password)) {
      errors.push('Password must contain at least one special character.');
    }
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters.');
    }

    setError(errors.join(' ')); // Display errors as a whole phrase
    return isValid;
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate email and password
    if (!validateEmail(email) || !validatePassword(password)) {
      return;
    }

    try {
      const mappedRole = role === 'INSTRUCTOR' ? 'INSTRUCTOR' : 'STUDENT';

      const response = await fetch('http://localhost:8080/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          userName,
          phoneNumber,
          role: mappedRole
        }),
      });

      if (response.ok) {
        console.log('Registration successful');
        localStorage.setItem('email', email);
        setVerificationCodeSent(true);
        closeRegisterModal();
        openVerificationModal();
      } else {
        const data = response.headers.get('Content-Type')?.includes('application/json') ? await response.json() : null;
        if (response.status === 409) {
          console.error('User already exists');
          setError(data?.message || 'User with this email or username already exists. Please use different credentials.');
        } else {
          console.error('Registration failed');
          setError(data?.message || 'Registration failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed. Please try again.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRegister(e);
    }
  };

  const checkEmailAvailability = async () => {
    // Check if the email field is filled
    if (!email.trim()) {
      setShowError(false); // Reset showError state if email field is empty
      setError(''); // Reset error state
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/check-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Email is available');
        setError(''); // Reset error state
        setShowError(false); // Reset showError state
      } else if (response.status === 409) {
        console.error('Email already exists');
        setError('Email already exists');
        setShowError(true);
      } else {
        console.error('Error checking email availability');
        setError('Error checking email availability');
        setShowError(true);
      }
    } catch (error) {
      console.error('Error during email availability check:', error);
      setError('Error during email availability check');
      setShowError(true);
    }
  };

  const checkUsernameAvailability = async () => {
    // Check if the username field is filled
    if (!userName.trim()) {
      setShowError(false); // Reset showError state if username field is empty
      setError(''); // Reset error state
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/check-username', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userName }),
      });

      if (response.ok) {
        console.log('Username is available');
        setError(''); // Reset error state
        setShowError(false); // Reset showError state
      } else if (response.status === 409) {
        console.error('Username already exists');
        setError('Username already exists');
        setShowError(true);
      } else {
        console.error('Error checking username availability');
        setError('Error checking username availability');
        setShowError(true);
      }
    } catch (error) {
      console.error('Error during username availability check:', error);
      setError('Error during username availability check');
      setShowError(true);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const enteredPhoneNumber = e.target.value;
    // Remove any non-numeric characters from the entered phone number
    const cleanedPhoneNumber = enteredPhoneNumber.replace(/\D/g, '');
    setPhoneNumber(cleanedPhoneNumber);

    // Validate the phone number format
    const phoneNumberRegex = /^09\d{9}$/;
    const isValidPhoneNumber = phoneNumberRegex.test(cleanedPhoneNumber);

    if (cleanedPhoneNumber.length === 11 && isValidPhoneNumber) {
      setPhoneNumberError('');
      setShowError(false); // Reset showError state
    } else {
      setPhoneNumberError('Please enter a valid 11-digit phone number starting with "09".');
      setShowError(true);
    }
  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleRegister} className="template-form">
        <h2>Sign up an account.</h2>
        <h2>Be part of the success.</h2>

        <div className="group_input">
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onBlur={checkUsernameAvailability}
            placeholder={`Username (${role === 'Admin' ? 'Admin' : role})`}
            required
          />

          <select
            id="Role"
            value={role}
            onChange={handleRoleChange}
          >
            <option value="STUDENT">Student</option>
            <option value="INSTRUCTOR">Instructor</option>
          </select>
        </div>
        <input
          type="text"
          id="FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={checkEmailAvailability}
          placeholder="Email Address"
          required
        />
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
          placeholder="Password"
          required
        />
        <div className="data-validation">
          {showError && (
            <label style={{ color: 'red', fontSize: '15px', fontWeight: '700', transition: 'color 0.3s' }}>
              {error}
            </label>
          )}
          {phoneNumberError && (
            <label style={{ color: 'red', fontSize: '15px', fontWeight: '700', transition: 'color 0.3s' }}>
              {phoneNumberError}
            </label>
          )}
        </div>
        <div>
        </div>
        <h3 style={{ fontSize: '15px' }}>By clicking Sign up you agree to our Terms of Use and our Privacy Policy.</h3>

        <div className="existing-account" onClick={() => {
          openLoginModal(); // Open login modal
          closeRegisterModal(); // Close register modal
        }}>
          Already have an account?
        </div>
        <button className="TeamA-button" style={{ backgroundColor: showError ? '#999999' : '#126912' }} disabled={showError}>Sign Up</button>
      </form>
      {showSuccessMessage && (
        <React.Fragment>
          <div className="modal-overlay"></div>
          <div className="success-popup">
            <p>Registration Successful. Verification Code Sent to Email.</p>
            <button onClick={handleProceed}>Proceed</button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default RegisterForm;

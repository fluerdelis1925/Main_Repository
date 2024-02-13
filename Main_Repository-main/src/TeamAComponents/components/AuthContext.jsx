/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// Create authentication context
const AuthContext = createContext();

// Authentication provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false); // State to track login status
  const [error, setError] = useState(null); // State to handle authentication errors
  const [loading, setLoading] = useState(false); // State to track loading state during authentication
  const [isAuthReady, setIsAuthReady] = useState(false); // State to track if authentication is ready
  const [timeoutId, setTimeoutId] = useState(null); // State to handle timeout for automatic logout
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Send request to server to logout
      const authToken = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:8085/api/v1/auth/logout', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });

      // Handle successful logout
      if (response.ok) {
        localStorage.clear(); // Clear all authentication related data from local storage
        setLoggedIn(false); // Update login status to false
        clearTimeout(timeoutId); // Clear the timeout for automatic logout
        navigate('/'); // Navigate to home page
      } else {
        console.error('Logout failed', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Unexpected error during logout', error);
    }
  };

  // Function to handle login
  const handleLogin = async (credentials) => {
    try {
      setLoading(true); // Set loading state to true
      // Send request to server to login
      const response = await fetch('http://localhost:8085/api/v1/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json(); // Parse response data

      if (response.ok) {
        if (data.accessToken) {
          // Store authentication token in local storage
          localStorage.setItem('authToken', data.accessToken);
          // Update other user data in local storage
          ['userId', 'username', 'firstName', 'lastName', 'email'].forEach((key) => {
            localStorage.setItem(key, data[key]);
          });
          setLoggedIn(true); // Update login status to true
          setError(null); // Clear any previous authentication error
          // Set a timeout for automatic logout after one hour (3600000 milliseconds)
          clearTimeout(timeoutId);
          const newTimeoutId = setTimeout(() => {
            handleLogout();
          }, 3600000);
          setTimeoutId(newTimeoutId);
          return { success: true, user: data }; // Return success status and user data
        } else {
          console.error('Token missing in response:', data);
          setError('Invalid response from the server: Token missing');
        }
      } else {
        console.error('Login failed. Server response:', data);
        if (response.status === 401) {
          setError('Invalid email or password. Please try again.');
        } else {
          setError('An unexpected error occurred. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Unexpected error during login', error);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false); // Set loading state to false
    }
    return { success: false, user: null }; // Return failure status
  };

  // Function to update local storage and set timeout for automatic logout
  const updateLocalStorage = (key, value) => {
    if (value !== undefined) {
      localStorage.setItem(key, value);
      clearTimeout(timeoutId);
      const newTimeoutId = setTimeout(() => {
        handleLogout();
      }, 3600000);
      setTimeoutId(newTimeoutId);
    }
  };

  // Effect hook to handle authentication initialization
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setLoggedIn(true); // Update login status to true
      setIsAuthReady(true); // Set authentication ready state to true
      // Set a timeout for automatic logout after one hour (3600000 milliseconds)
      const newTimeoutId = setTimeout(() => {
        handleLogout();
      }, 3600000);
      setTimeoutId(newTimeoutId);
    } else {
      setIsAuthReady(true); // Set authentication ready state to true
    }
  }, []);

  // Provide authentication context to children components
  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout, setLoggedIn, error, loading, isAuthReady }}>
      {children}
    </AuthContext.Provider>
  );
};

// PropTypes for AuthProvider component
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use authentication context in components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

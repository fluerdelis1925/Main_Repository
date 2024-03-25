import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

// NewPassForm component
function NewPassForm({ closeNewPassModal, openLoginModal }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordValid, setPasswordValid] = useState(false); // Added state to track password validity

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmedPassword = e.target.value.trim();
    setConfirmPassword(confirmedPassword);

    if (newPassword !== confirmedPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
    validatePassword(newPassword, confirmedPassword); // Validate password when confirm password changes
  };

  const validatePassword = (newPasswordValue, confirmPasswordValue) => {
    // Regular expressions for password requirements
    const uppercaseRegex = /[A-Z]/;
    const numericRegex = /\d/;
    const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    let isValid = true;
    let error = "";

    if (newPasswordValue.length < 8) {
      isValid = false;
      error = "Password must be at least 8 characters long.";
    } else if (!uppercaseRegex.test(newPasswordValue)) {
      isValid = false;
      error = "Password must contain at least 1 uppercase letter.";
    } else if (!numericRegex.test(newPasswordValue)) {
      isValid = false;
      error = "Password must contain at least 1 numeric character.";
    } else if (!symbolRegex.test(newPasswordValue)) {
      isValid = false;
      error = "Password must contain at least 1 symbol character.";
    }

    if (isValid) {
      setNewPasswordError("");
      setConfirmPasswordError("");
    } else {
      setNewPasswordError(error);
      setConfirmPasswordError("");
    }

    setPasswordValid(isValid && newPasswordValue === confirmPasswordValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve ForgotEmail and ForgotCode from local storage
    const forgotEmail = localStorage.getItem("forgotEmail");
    const forgotCode = localStorage.getItem("forgotCode");

    // Perform your form submission here
    if (passwordValid) {
      // Use passwordValid state to determine if password meets criteria
      console.log("Password match! Submitting...");

      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/auth/reset-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: forgotEmail,
              code: forgotCode,
              newPassword: newPassword,
            }),
          }
        );

        if (response.ok) {
          console.log("Password reset successfully.");
          // Clear local storage after successful password reset
          closeNewPassModal();
          openLoginModal();
          localStorage.removeItem("forgotEmail");
          localStorage.removeItem("forgotCode");
          // Add your logic for successful password reset, e.g., redirect to login page
        } else {
          console.error("Failed to reset password.");
          // Add your logic for failed password reset
        }
      } catch (error) {
        console.error("Error resetting password:", error);
        // Add your logic for handling errors
      }
    } else {
      console.error("Passwords do not match or are empty. Please check.");
      // Add your logic for passwords mismatch or empty fields
    }
  };

  return (
    <div className="new-pass-form-container">
      <div className="email-forms-container">
        <form className="template-form" onSubmit={handleSubmit}>
          <h2 className="email-title">Change Password</h2>
          <p>Please Change Your Password Here.</p>
          <div className="email-input-field">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter New Password here*"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              onFocus={() => setNewPasswordError('')}
              required
            />
          </div>
          <div className="email-input-field">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm New Password*"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onFocus={() => setConfirmPasswordError('')}
              required
            />
             {newPassword === confirmPassword && newPassword.trim() !== '' && (
            <span style={{ color: 'green', fontSize: '14px', marginTop: '-5px', display: 'block' }}>Passwords match</span>
          )}
          {newPassword !== confirmPassword && confirmPassword.trim() !== '' && (
            <span style={{ color: 'red', fontSize: '14px', marginTop: '-5px', display: 'block' }}>
              {confirmPasswordError || 'Passwords do not match'}
            </span>
          )}
          {newPassword.trim() === '' && confirmPassword.trim() === '' && (
            <span style={{ color: 'red', fontSize: '14px', marginTop: '-10px', display: 'block' }}>{newPasswordError}</span>
          )}
          {newPassword.trim() !== '' && (
            <span style={{ color: 'red', fontSize: '14px', marginTop: '0px', display: 'block' }}>
              {newPassword.length < 8 ? '8 characters,' : ''}
              {/[A-Z]/.test(newPassword) ? '' : ' 1 uppercase letter, '}
              {/\d/.test(newPassword) ? '' : ' 1 numeric character, '}
              {/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword) ? '' : ' 1 symbol '}
            </span>
          )}
          </div>
          
        
          <button className="TeamA-button" style={{ marginTop: '65px' }} disabled={!passwordValid}>Confirm</button>
        </form>
      </div>
      <div className="email-panels-container">
        <div className="email-panel email-left-panel">
          <div className="content">
            {/* Add content for the left panel */}
          </div>
          <img src="your-image.png" className="email-image" alt="" />
        </div>
      </div>
    </div>
  );
}
export default NewPassForm;
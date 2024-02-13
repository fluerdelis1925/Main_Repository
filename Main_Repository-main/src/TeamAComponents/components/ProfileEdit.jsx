import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Auth.css";

import ProfileEditForm from "./ProfileEditForm";
import Navigation from './Navigation';
import { useAuth } from "./AuthContext";

// ProfileEdit component to render the profile edit form
function ProfileEdit() {
  // Get authentication status and logout function from useAuth hook
  const { isLoggedIn, handleLogout } = useAuth();

  return (
    <div>
      {/* Navigation header */}
      <div className="home-header">
        <img
          src="..\src\assets\TeamAassets\companyLogo.png"
          alt="Logo"
          className="Qlogo"
        />
      </div>
      {/* Profile edit form */}
      <div className="Prof2-sign">
        <ProfileEditForm/>
      </div>
    </div>
  );
}

export default ProfileEdit;

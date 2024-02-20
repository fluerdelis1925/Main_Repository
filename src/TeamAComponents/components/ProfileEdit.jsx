import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Auth.css";

import ProfileEditForm from "./ProfileEditForm";
import Navigation from './Navigation';
import { useAuth } from "./AuthContext";


const ProfileEdit = ({ handleClose }) => {

  const { isLoggedIn, handleLogout } = useAuth();
  const navigate = useNavigate(); //
    
  return (
    <div>
      {/* Home header with the company logo */}
     <div className="home-header">
        <img
           src="..\src\assets\TeamAassets\companyLogo.png"
          alt="Logo"
          className="Qlogo"
          
        />
      </div>
        <div className="Prof2-sign">
          {/* Render the profile edit form */}
          <ProfileEditForm/>

        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;

import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./TeamD_Css/navbar.css";
import TsukidenLogo from "./TeamD_Assets/TsukidenLogo.png";
import Profile from "./TeamD_Assets/profilepic.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import { FaRegUserCircle } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import NavDropdown from "react-bootstrap/NavDropdown";
import ForumF from "./../TeamCComponents/pages/ForumF";
import { useAuth } from "../TeamAComponents/components/AuthContext";

function getUserImageType(profilePicture) {
  // Check if profilePicture is defined and not null
  if (profilePicture && profilePicture.startsWith) {
    // Check the image type based on the data
    const isPNG = profilePicture.startsWith('data:image/png;base64,');
    const isJPEG = profilePicture.startsWith('data:image/jpeg;base64,');
    
    if (isPNG) {
      return 'png';
    } else if (isJPEG) {
      return 'jpeg';
    } else {
      // Return a default type or handle accordingly
      return 'unknown'; // You can change this to 'jpeg' or handle as needed
    }
  } else {
    // Return a default type or handle accordingly
    return 'unknown'; // You can change this to 'jpeg' or handle as needed
  }
}

const Team_D_HeaderV2 = () => {
  const [clicked, setClicked] = useState(false);
  const [showLogoutConfirmationModal, setShowLogoutConfirmationModal] = useState(false);
  const { handleLogout } = useAuth();
  const value = localStorage.getItem('username');
  const firstname = localStorage.getItem('firstName');
  const lastname = localStorage.getItem('lastName');
  const email = localStorage.getItem('email');
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMobileNavbar = () => {
    setClicked(false);
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setShowLogoutConfirmationModal(false);
    navigate("/"); // Use navigate function to redirect
  };

  const handleOpenLogoutConfirmationModal = () => {
    setShowLogoutConfirmationModal(true);
  };

  const handleCloseLogoutConfirmationModal = () => {
    setShowLogoutConfirmationModal(false);
  };

  // Add or remove the 'no-scroll' class based on the 'clicked' state
  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on component unmount
    };
  }, [clicked]);

  return (
    <>
      <nav className="navbar_TeamD">
        <NavLink
          onClick={() => {
            closeMobileNavbar();
          }}
        >
          <img src={TsukidenLogo} alt="Logo" />
        </NavLink>
        <div>
          <ul id="navbar" className={clicked ? "active" : ""}>
            {/* Profile Info */}
            <li className="profile_info">
              <span className="profile_info_con">
                <img src={Profile} alt="Logo" />
                <span className="profile_info_name">
                  <p className="profile_fName">{firstname + " " + lastname}</p>
                  <p className="profile_email">{email}</p>
                </span>
              </span>
            </li>
            {/* Profile Links */}
            <li className="profile_link">
              <NavLink
                to="/profile"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                Profile
              </NavLink>
            </li>
            <li className="profile_link">
              <NavLink
                to="/certificate"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                My Certificate
              </NavLink>
            </li>
            <li className="divider"></li>
            {/* Navigation Links */}
            <li>
              <NavLink
                to="/TeamCDashboard"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="My Course"
                menuVariant="dark"
                className="mycourse_dd"
              >
                <NavDropdown.Item href="course" activeClassName="active">
                  Program Overview
                </NavDropdown.Item>
                <NavDropdown.Item href="assessment" activeClassName="active">
                  Assessment
                </NavDropdown.Item>
                <NavDropdown.Item href="/CertGen" activeClassName="active">
                  Get Certification
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <NavLink
                to="/ForumF"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                Forums
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/verification"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                Verification
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div id="mobile" onClick={handleClick}>
          {clicked ? (
            <i className="fas fa-times"></i>
          ) : (
            <img src={Profile} alt="Logo" className="mobile_profile" />
          )}
        </div>
        {/* Profile Dropdown */}
        <div className="profile_side">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="button_profile"
            >
              <img src={Profile} alt="" className="profile_img" />
              Hi, {value}!
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">
                <FaRegUserCircle /> Profile
              </Dropdown.Item>
              <Dropdown.Item
                as={NavLink}
                to="/certificate"
                onClick={closeMobileNavbar}
              >
                <TbCertificate /> My Certificate
              </Dropdown.Item>
              <Dropdown.Item onClick={handleOpenLogoutConfirmationModal}>
                <FiLogOut /> Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
      {showLogoutConfirmationModal && (
          
              <div className="logoutmodal-overlay" onClick={handleCloseLogoutConfirmationModal}>
                  <div className="label-container">
              <div className="container-under">
                <div className="auth-label">
                  <h1>Logout Confirmation</h1>
                </div>
                <div className="logoutmodal">
                  <h2>Are you sure you want to log out?</h2>
                  <div>
                    <button onClick={handleConfirmLogout}>Yes</button>
                    <button onClick={handleCloseLogoutConfirmationModal}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

    </>
  );
};

export default Team_D_HeaderV2;

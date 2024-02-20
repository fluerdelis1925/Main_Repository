/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useNavigation} from 'react-router-dom';
import "../styles/Auth.css";
import { useAuth } from "./AuthContext";
import { Modal } from 'react-bootstrap';
import ProfileEditForm from './ProfileEditForm';


// Function to get user image type
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


const Profile  = ({ handleClose, handleEditClick, handlePasswordChangeClick }) => {

  const { isLoggedIn, handleLogout } = useAuth();
  const [userData, setUserData] = useState({});
  const [updateData, setUpdateData] = useState({});
  const navigate = useNavigate(); //


  useEffect(() => {
    const fetchUserData = async () => {
      try {

        // Introduce a delay to ensure asynchronous operations have completed
        setTimeout(async () => {
          const authToken = localStorage.getItem('yourAuthTokenKey');

          // Check if authentication token is available
          if (!authToken) {
            console.error('Authentication token not found');
            return;
          }

          // Fetch user data from the server
          const response = await fetch('http://localhost:8085/api/v1/auth/user', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${authToken}`, // Include the authentication token in the request headers
            },
          });

          // Check if the response is successful
          if (response.ok) {
            // Parse the response body as JSON and set the user data state
            const userData = await response.json();
            setUserData(userData);
          } else {
            // Log an error message if fetching user data fails
            console.error('Failed to fetch user data');

          }
        } else {
          console.error('Failed to fetch user data', response.status, response.statusText);
        }
      } catch (error) {

         // Log an error message if an unexpected error occurs during the fetch operation
        console.error('Error during user data fetch:', error);

      }
    };
  
    fetchUserData();
  }, []);

    
  return (
    <>

    <div className="home-header">
  {/* Link component wraps the logo image and triggers goBack function when clicked */}
  <Link onClick={goBack}>
    {/* Logo image with source path and alt text */}
    <img
      src="..\src\assets\TeamAassets\companyLogo.png"
      alt="Logo"
      className="Qlogo"
    />
  </Link>
</div>
   <div className="Prof1-wrapper">
  {/* Link component wrapping the button to navigate back to the TeamC dashboard */}
  <Link to="/teamcdashboard">
    {/* Button with an arrow-left icon */}
    <button className="wBackbutton">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
      </svg>
    </button>
  </Link>
      <div className="Prof1-left">
  {/* SVG icon representing a person */}
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
  </svg>
</div>
      <div className="Prof1-right">
  <div className="Prof1-info">
    <h3>Profile Information</h3>
    <div className="Prof1-info_data">
      {/* Display username */}
      <div className="Prof1-info_row">
        <h4>Username:</h4>
        <p>{userData.email}</p>
      </div>>
            <div className="Prof1-info_row">
  {/* Display first name */}
  <h4>First name:</h4>
  <p>{userData.userName}</p>
</div>
<div className="Prof1-info_row">
  {/* Display last name */}
  <h4>Last name:</h4>
  <p>{userData.email}</p>
</div>
            <div className="Prof1-info_row">
          {/* Display email */}
          <h4>Email:</h4>
          <p>{userData.email}</p>

            </div>
          </div>
          <div className="Pro1-data">
          {/* Add content for earned badges */}
        </div>

        <div className="Prof1-buttons">
          {/* Button to navigate to the update profile page */}
          <Link to="/update">
            <button className="Prof1-Editbuttons">Edit</button>
          </Link>
          {/* Button to navigate to the change password page */}
          <Link to="/change">
            <button className="Prof1-ChangeButton">Change Password</button>
          </Link>

        </div>
      </div>
    </>
  );
}

export default Profile;

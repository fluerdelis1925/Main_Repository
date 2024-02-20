/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import "../styles/Auth.css";


function ProfileEditForm({ handleClose }) {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();
  const [imagePreview, setImagePreview] = useState(null);
  const [userData, setUserData] = useState(null);
  const fileInputRef = useRef(null);
  const [updateData, setUpdateData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    profilePicture: null, // Add profilePicture to state
  });

  useEffect(() => {
    // Fetch user data from your backend API
    const fetchUserData = async () => {
        try {
            // Get user ID from local storage
            const userId = localStorage.getItem('userId');

            if (!userId) {
                console.error('User ID not found in local storage');
                // Handle this case, for example, redirect the user to login
                return;
            }

            const response = await fetch(`http://localhost:8085/api/v1/auth/users/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const userData = await response.json();
                setUserData(userData);

                // Set the initial state of updateData with the existing user data
                setUpdateData({
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    userName: userData.userName,
                    // Add more fields as needed
                    profilePicture: userData.profilePicture,
                });

                // If the profile picture is in binary format, convert it to a data URL
                if (userData.profilePicture) {
                    const base64 = btoa(String.fromCharCode(...new Uint8Array(userData.profilePicture)));
                    const dataUrl = `data:image/avif;base64,${base64}`;
                    setUpdateData((prevData) => ({
                        ...prevData,
                        profilePicture: dataUrl,
                    }));
                }
            } else {
                console.error('Failed to fetch user data', response.status, response.statusText);
                // Handle this error as needed
            }
        } catch (error) {
            console.error('Unexpected error during user data fetch', error);
            // Handle unexpected errors
        }
    };

    fetchUserData();
}, []);


const handleInputChange = (e, isFile = false) => {
  const { name, value, files } = e.target;

  if (isFile) {
      const selectedFile = files[0];

      // Check if the selected file size exceeds the allowed limit (5 MB)
      const maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes

      if (selectedFile && selectedFile.size > maxFileSize) {
          // Show an error message or handle it as needed
          console.error('File size exceeds the allowed limit (5 MB)');
          return;
      }

      // Update the profile picture state
      setUpdateData((prevData) => ({
          ...prevData,
          [name]: selectedFile,
      }));

      // Generate image preview
      const reader = new FileReader();
      reader.onloadend = () => {
          setImagePreview(reader.result);
      };

      if (selectedFile) {
          reader.readAsDataURL(selectedFile);
      } else {
          setImagePreview(null);
      }
  } else {
      setUpdateData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  }
};
  

  const handleProfilePictureUpload = async () => {
    try {

      const response = await fetch(`http://localhost:8085/api/v1/update/${email}`, {
        method: 'PUT', // Using the PUT method for updating data
        headers: {
          'Content-Type': 'application/json', // Specifying JSON content type for the request body
        },
        body: JSON.stringify({// Convert the data to JSON format
      email, // Include the user's email in the request body
      username, // Include the updated username
      firstName, // Include the updated first name
      lastName, // Include the updated last name
        }),
      });

      // Check if the response is successful
if (response.ok) {
  console.log('Profile updated successfully'); // Log a success message if the update was successful
} else {
  console.error('Profile update failed'); // Log an error message if the update failed
}
} catch (error) {
  console.error('Error during profile update:', error); // Log any errors that occurred during the update process
}
  };
    // const handleFormSubmit = (e) => {
    //   e.preventDefault();
    //   onProfileEditForm(verification);
    //   console.log('Verification code submitted:', verification);
    //   // You can add further logic or redirection if needed
    // };
  
    return (
      {/* Container for the profile edit form */}
  <div>
    {/* Link to navigate back to the profile page */}
    <Link to="/profile">
      {/* Button with arrow-left icon */}
      <button className="Prof2-Backbutton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
      </button>
        </Link>
        </div>
        <div className="Prof2-left">
      {/* SVG icon representing a person */}
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
        </svg>
      {/* Title for the section */}
          <h4>Name</h4>
            {/* Placeholder for the position name */}
          <p>Position name</p>
        </div>
        <div className="Prof2-right">
            {/* Section for profile information */}
          <div className="Prof2-info">
            {/* Title for the section */}
          <h3>Profile Information</h3>
          {/* Form for updating profile data */}
            <form onSubmit={handleUpdate} className="Prof2-info_data">
             {/* Container for each data field */}

              <div className="Prof2-data">
                {/* Label for the first name input field */}
                <label htmlFor="firstName">First Name</label>
                {/* Input field for entering the first name */}
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={updateData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                />
                {/* Label for the email input field */}
                <label htmlFor="email">Email</label>

                {/* Input field for entering the email */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />

              </div>
              <div className="Prof2-data">
                {/* Label for the last name input field */}
                <label htmlFor="lastName">Last Name</label>
                {/* Input field for entering the last name */}
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={updateData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                />
                {/* Label for the username input field */}
                <label htmlFor="username">Username</label>
                {/* Input field for entering the username */}
                <input
                  type="text"

                  id="username"
                  name="usermame"  {/* Name attribute for the username */}
                  value={username}
                  onChange={(e) => setUserName(e.target.value)} {/* Update the username state */}

                  placeholder="Enter your username"
                />
              </div>
              {/* Update and Cancel buttons */}
              <div className="Prof2-buttons">
                <button className="submit-button">
                  Update
                </button>
                <Link to="#">
                  <button onClick={handleCancel} className="cancel-button">Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>

    );
  }
  
  export default ProfileEditForm;
  


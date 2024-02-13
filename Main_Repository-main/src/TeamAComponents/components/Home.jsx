import React from "react";
import Navigation from './Navigation'; // Importing Navigation component
import { useAuth } from './AuthContext'; // Importing useAuth hook from AuthContext
import "../styles/Auth.css"; // Importing CSS styles

// Home component representing the home page of the application
const Home = () => {
  const { isLoggedIn, handleLogout } = useAuth(); // Destructuring isLoggedIn and handleLogout from useAuth hook

  return (
    <div className="home-container"> {/* Container for the home page */}
      {/* Navigation component */}
      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> {/* Passing isLoggedIn and handleLogout props to Navigation component */}
      {/* Home content section */}
      <div className="home-content"> {/* Content section of the home page */}
        {/* Japanese message */}
        <div className="japanese-message">
          <h1>知識を得る。自分のやり方で学ぼう。ベストを尽くす。</h1> {/* Japanese message */}
        </div>
        {/* English message */}
        <div className="english-message">
          <h1>Gain knowledge. Learn your way. Be the best.</h1> {/* English message */}
        </div>
        {/* Courses section */}
        <div className="courses"> {/* Section for displaying courses */}
          {/* Programming square */}
          <div className="square"> {/* Square for Programming course */}
            <h3>Programming</h3> {/* Title of Programming course */}
          </div>
          {/* Bayani Intelligence square */}
          <div className="square"> {/* Square for Bayani Intelligence course */}
            <h3>Bayani Intelligence</h3> {/* Title of Bayani Intelligence course */}
          </div>
          {/* Business square */}
          <div className="square"> {/* Square for Business course */}
            <h3>Business</h3> {/* Title of Business course */}
          </div>
          {/* Security square */}
          <div className="square"> {/* Square for Security course */}
            <h3>Security</h3> {/* Title of Security course */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; // Exporting the Home component

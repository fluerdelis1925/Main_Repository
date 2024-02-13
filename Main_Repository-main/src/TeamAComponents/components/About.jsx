/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css"; // Import CSS styles

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="my-navigation">
        <Link to='/'>
          {/* Company Logo */}
          <img src="..\src\assets\TeamAassets\companyLogo.png" alt="Logo" />
        </Link>
        {/* Navigation Links */}
        <ul className="menu-hide">
          <li>
            <a href="/verif_nonuser">Verification</a>
          </li>
          <li>
            <a href="About">About us</a>
          </li>
          <li>
            <a href="https://www.tsukiden.com.ph">Contact us</a>
          </li>
        </ul>
        {/* Buttons for Register and Log In */}
        <div className="testing">
          <Link to="/register">
            <button id="register">Register</button>
          </Link>
          <Link to="/login">
            <button id="login">Log In</button>
          </Link>
        </div>
      </nav>

      {/* Main Content Section */}
      <div className="home-content">
        <div className="about-container">
          {/* About Us Section */}
          <h1 style={{marginTop:'15px'}}>About Us </h1>
          <p style={{ padding: ".5rem" }}>
            Tsukiden Global Solutions, Inc. YOUR RELIABLE IT PARTNER That's who
            WE are. For more than 30 years now, Team Tsukiden has always been
            the trusted reliable IT partner of its clients for various projects
            in Japan, Philippines, Malaysia, Hong Kong, Singapore, Taiwan,
            United Kingdom, and the United States of America.
          </p>
          <p style={{ padding: ".5rem" }}>
            Pioneer in IT Outsourcing Tsukiden Global Solutions Inc. is one of
            the pioneers in IT Outsourcing for the Japanese market here in the
            Philippines. Since 1989, even before the word “outsourcing” was
            coined, WE have been sending engineers to Japan for software
            development. With our years of experience and still growing, there
            is no other more stable company to outsource to than Tsukiden Global
            Solutions Inc.
          </p>
          <p style={{ padding: ".5rem" }}>
            Tsukiden Global Solutions Inc. provides its clients the advantage of
            having hardworking, committed and talented manpower on demand, where
            and when they are needed at a cost that fits the development budget.
          </p>
          
          {/* Vision and Mission Section */}
          <div className="about-mv">
            <h1>Vision</h1>
            <p  style={{ padding: ".5rem", width: "75%" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est dolor id nisi maiores, ullam aliquam ad rerum explicabo recusandae reiciendis nemo facilis ea debitis et laborum tempora culpa illo vero!
            </p>
            <h1>Mission</h1>
            <p style={{ padding: ".5rem", width: "75%"  }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum facilis quae mollitia vitae. Atque provident fuga eum autem iure reiciendis quisquam magnam, aperiam minus neque laboriosam dolorem, molestiae culpa facilis!
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="flex justify-center p-5  bottom-0 w-full ">
        <div>
          <p className="text-[#4D9349] font-medium">All Rights Reserved | Copyright 2024</p>
        </div>
      </footer>
    </>
  );
};

export default About;

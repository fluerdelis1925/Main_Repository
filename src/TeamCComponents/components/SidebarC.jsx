import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { ArrowLeft } from "react-bootstrap-icons"; // Assuming you have this icon imported
import "../css/sidebar.css";
import "../css/base_style.css";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


const SidebarC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" sidebar-wrapper" >
      <div className={`hamburger-menu ${isOpen ? "open" : ""}`} onClick={toggleSidebar}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        
        <div className="">
          <ul className="nav flex-column">
            <li className="teamcnavitem nav-item">
              <Link className="teamctopic nav-link" to="/topic1">
                Topic 1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="teamctopic nav-link" to="/topic2">
                Topic 2
              </Link>
            </li>
            <button className="btn courseButton"
                        data-bs-toggle="modal"
                        data-bs-target="#mainId"
                        type="button"
                        style={{
                          backgroundColor: '#0E3B03',
                          color: 'white',
                          boxShadow: '0 2px 5px 0 rgb(0 0 0 / 25%), 0 5px 5px 0 rgb(0 0 0 / 30%)',
                        }}
                      >Go to quiz</button>
            <Link onClick={goBack} className="buttonReturn d-flex align-items-center c_chapter_returncontainer" style={{ textDecoration: 'none', color: 'black', width: 'fit-content', }}>
              <div className="teamcreturnbtn d-flex align-items-center" style={{ marginTop: '1rem' }}>
                <div>
                  <IoArrowBackCircleSharp className="btnReturn c_chapter_return" alt="return-icon" style={{
                    transition: 'transform .1s', color: '#165207',
                    marginLeft: '1rem', width: '2rem', height: '2rem',
                  }} />
                </div>
                <span className="returnTitle c_chapter_returnText" style={{ marginLeft: '0.5rem', color: '#126912', fontSize: '1.5rem', marginTop: '0rem', }}>Back</span>
              </div>
              {/* Return button contents */}
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SidebarC;

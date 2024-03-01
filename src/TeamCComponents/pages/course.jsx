import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../TeamCComponents/css/base_style.css';
import Team_D_HeaderV2 from "../../TeamDComponents/Team_D_HeaderV2";
import axios from "axios";

function TeamC_ChapterSvn() {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/auth/getCourses");
        setChapters(response.data);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchChapters();
  }, []);

  console.log(chapters)
  return (
    <>
      {/*Navbar Component*/}
      <Team_D_HeaderV2 />
      <div className="container mt-5 mx-auto" id="c_course_maincontainer">
        {/* Program Overview Title */}
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '2rem' }}>Program Overview</h2>
        <hr />

       {chapters.map((chapter, idx) => {
        const {course_title, course_id} = chapter
        console.log(course_title)
        return (
          <div key={idx} className="d-flex align-items-center" id="c_course_courses">
          {/* Chapter Tag */}
          <div className='d-flex align-items-center justify-content-center' id="c_course_tag">
            <span id="c_course_tagtext">course_code</span>
          </div>

          {/* Chapter Card */}
          <div className="c_course_cardmain card flex-grow-1" style={{ marginTop: '10px', willChange: 'filter', transition: 'filter 300ms', backgroundColor: '#126912', borderRadius: '1rem', }}>
            {/* Chapter Link */}
            <Link to={`/api/v1/auth/chapters/${course_id}`} className="h4 text-white text-decoration-none c_chapter_cardtext">
              {/* Chapter Card Body */}
              <div className="card-body d-flex" id="c_course_cardbody" style={{ backgroundColor: '#126912', borderRadius: '1rem', }}>
                {course_title}
              </div>
            </Link>
          </div>
        </div>
        )
       })}
      </div>
    </>
  );
}

export default TeamC_ChapterSvn;

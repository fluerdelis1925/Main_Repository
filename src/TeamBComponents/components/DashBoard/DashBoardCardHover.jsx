/* eslint-disable react/prop-types */ // Disables prop-types linting rule for this component
import React, { useContext, useEffect, useState } from "react"; // Imports necessary React components and hooks
import { DashBoardContext } from "../context/DashBoardContext"; // Imports DashboardContext from context file
import { useParams } from "react-router-dom"; // Imports useParams hook from react-router-dom
import axios from "axios"; // Imports axios for making HTTP requests
import { IoMdClose } from "react-icons/io"; // Imports IoMdClose icon from react-icons 

const DashBoardCardHover = ({ courseId, closeDashHover }) => { // Declares DashBoardCardHover component with courseId and closeDashHover props
  //state for topics
  const [courses, setCourses] = useState({
    course_title: "", // State for course title
    course_description: "", // State for course description
  });

  const { course_title, course_description } = courses; // Destructures course_title and course_description from courses state
  const handleInputChange = (e) => { // Defines handleInputChange function to update course state
    setCourses({ ...courses, [e.target.name]: e.target.value }); // Updates the state with the new input value
  };

  useEffect(() => { // useEffect hook to load course details on component mount
    loadCourses(); // Calls loadCourses function
  }, []);

  const handleSubmit = async (e) => { // Handles form submission
    // Assuming your API call is successful, update the state to indicate form submission

    try {
      await axios.put(`http://localhost:8080/api/courses/${courseId}`, courses); // Makes a PUT request to update course details
      // showModal(false);
    } catch (error) {
      console.error("Error submitting form:", error); // Logs error if API call fails
      // Handle error if the API call fails
    }
  };
  const loadCourses = async () => { // Function to load course details
    const result = await axios.get(  
      `http://localhost:8080/api/courses/${courseId}` // Makes a GET request to fetch course details
    );
    setCourses(result.data);// Sets the fetched course details in state
  };

  const handleCancel = () => { // Handles cancellation
    // Implement your cancel logic here
    closeDashHover((prev) => !prev); // Closes the hover card by toggling the previous state value
  };

  return (
    <div className="">
      <div className="flex justify-center items-center backdrop-blur-[.3rem] w-[100vw] h-[150vh]  mt-7"> {/* Container for hover card */}
        <div className="h-[70vh] md:w-[500px] lg:w-[800px] 2xl:h-[500px] 2xl:w-[1000px]  bg-[#BCE8B1] rounded-2xl shadow-2xl mt-7"> {/*light green */} {/* Hover card */}
          <div className="flex flex-col w-full h-full px-10 pb-10"> 
            <div className="pt-2 h-[50%]">
              <div
                onClick={handleCancel}
                className="flex justify-end w-full pt-2 pr-2 cursor-pointer"> {/* Close button */}
                <IoMdClose className="text-[1.5rem]" /> {/* Close icon */}
              </div>
              <p className="flex text-[2rem] font-bold pl-5 justify-center items-center">{course_title}</p> {/* Course title */}
            </div>
            <div className="w-[100%] bg-[#87D275] h-[50vh] overflow-auto rounded-2xl "> {/**dark green */} {/* Course description */}
              <p className="py-3  px-3 text-justify rounded-lg ">
                {course_description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCardHover; //Exports DashBoardCardHover component
//comments by: Judes 02-19-24
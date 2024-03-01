/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { createContext,  useState } from 'react'


export const CourseContext = createContext();

const CourseProvider = ({children}) => {
  //react state for course api
  const [courses, setCourses] = useState([]);

  //chapter state
  const [chapters, setChapters] = useState([])

  //topic state
  // const [topics, setTopics] = useState([])

  //hide and show create new course
  const [showCreateCourse, setShowCreateCourse] = useState(false);

  return (
    <CourseContext.Provider
      value={{
        courses,
        setCourses,
        showCreateCourse,
        setShowCreateCourse,
        chapters,
        setChapters,
     
      }}>
      {children}
    </CourseContext.Provider>
  );
}

export default CourseProvider

import React from 'react'
import CourseOverviewCard from './CourseOverviewCard'
import Nav from '../NavBar/Nav'



const CourseOverview = () => {


  return (
    <div className='h-full'> 
    <Nav/>
      <div className='mt-[70px]'>
    {/* Use react icon instead of word back */}
   

      <CourseOverviewCard/>
  </div>
    
    </div>
  )
}

export default CourseOverview

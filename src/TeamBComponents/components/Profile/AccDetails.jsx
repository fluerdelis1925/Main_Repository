import Footer from "../Footer"; // Importing footer component
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom


const AccDetails = () => { //Function component declaration
  return (
    <>
      {/* 1/11/2024 Created Account Details UI Ouline */}
      {/* Note: Change UI according to UI Designed */}

        <div className="static bottom-[-.3rem] flex items-center flex-col h-full gap-y-5 w-[90%] lg:h-[320px]  lg:w-[680px]  xl:w-[948px] xl:h-[455px] bg-[#BCE8B1] lg:rounded-b-md rounded shadow-md"> {/* Container div */}
          <div className="xl:w-[90%] flex flex-col items-center mt-10 xl:mt-7 lg:gap-y-[2rem] xl:gap-y-[3rem]"> {/* Nested div */}
          {/* Email section */}
            <p className="relative lg:w-[600px] lg:h-[50px] xl:w-[829px] xl:h-[70px] bg-[#D1DFCD] lg:text-[.8rem] 2xl:text-[16px] lg:rounded-lg 2xl:rounder-[5px] text-[#4D4141] text-opacity-[53%] shadow-lg  flex items-center pl-2 "> {/* Paragraph element */}
              <span className="absolute top-1 ">Email</span> {/* Span element */}
            </p>
             {/* Username section */}
            <p className="relative lg:w-[600px] lg:h-[50px] xl:w-[829px] xl:h-[70px] bg-[#D1DFCD] lg:text-[.8rem] 2xl:text-[16px] lg:rounded-lg 2xl:rounder-[5px] text-[#4D4141] text-opacity-[53%] shadow-lg  flex items-center pl-2 "> {/* Paragraph element */}
              <span className="absolute top-1 ">Username</span> {/* Span element */}
            </p>
            {/* Change Password section */}
            <p
              className="cursor-pointer mr-auto lg:w-[130px] xl:ml-3 text-center lg:h-[30px] font-semibold xl:w-[159px] xl:h-[36px]   bg-[#D1DFCD] lg:text-[.8rem] 2xl:text-[16px] lg:rounded-lg 2xl:rounder-[5px] text-[#4D4141] text-opacity-[53%] shadow-lg  flex justify-center items-center  "> {/* Paragraph element */}
              <Link to = "/change"> {/* Link component */}         
              <span className="">Change Password</span> {/* Span element */}
              </Link>
            </p>
          </div>
        </div>
    </>
  );
};

export default AccDetails; // Exporting AccDetails component
//1/19/2024
//comments by: Judes 02-19-24
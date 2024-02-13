/* eslint-disable react/prop-types */

//2/3/2024 junite/ced, create CourseDescription UI, completed

import React from "react";
import { FaSave } from "react-icons/fa";
import Footer from "../../Footer";

//import toastify react
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//remove close button
const CloseButton = ({ closeToast }) => (
  <i className="material-icons" onClick={closeToast}></i>
);

const CourseDescription = () => {
  //toast
  const addToCartNotify = () => {
    toast.success("Course Description, Successfully Saved!", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      closeButton: CloseButton,
    });
  };
  return (
    <>
      {/* add topic title */}
      <div className="h-[100vh] w-full pt-2">
        <div className="flex items-center justify-end w-full ">
          <div
            className="flex items-center gap-2 pr-5 cursor-pointer"
            onClick={() => addToCartNotify()}>
            <div className="text-[#4c604c] text-[1.5rem]">
              <FaSave />
            </div>
            <span className="text-[#126912] font-semibold">Save</span>
          </div>
        </div>
        <div className="w-[90%] m-auto">
          <span className="lg:text-[2rem] 2xl:text-[48px] font-semibold ">
            Course Description
          </span>
      
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder=" Lorem ipsum dolor sit amet. Ut labore facere aut dolorem deleniti cum repudiandae delectus aut quam beatae aut aliquam omnis sed harum odio. Eos consectetur placeat sit itaque ipsum qui laudantium autem. Et voluptatum optio At odio amet cum enim dicta sed deleniti adipisci ut maiores perspiciatis. Aut dicta soluta qui sapiente quibusdam ut tempore facilis et ducimus provident. Hic voluptate."
            className="bg-[#BCE8B1] TeamB_text-shadow resize-none lg:min-w-[100%] 2xl:h-[504px] 2xl:max-w-[1342px] lg:h-[50vh] placeholder:font-medium placeholder:text-justify placeholder:p-10
              outline-none rounded-lg placeholder:text-[#070101] placeholder:text-opacity-[55%] mt-5 p-2 "
          />
        </div>

        <ToastContainer className="tcenter" closeButton={CloseButton} />
        <div className="mt-[50px]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CourseDescription;

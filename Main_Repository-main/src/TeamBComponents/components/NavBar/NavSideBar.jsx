import React from "react";

//import react icon
import { RxCross2 } from "react-icons/rx";

const NavSideBar = () => {
  //create a react hook for showing and hiding element
  //hide an element when cross icon is clicked

  return (
    <div className="fixed w-[80%] h-[50vh] bg-red-50 right-0 top-0">
      <RxCross2 />
      sidebar
    </div>
  );
};

export default NavSideBar;

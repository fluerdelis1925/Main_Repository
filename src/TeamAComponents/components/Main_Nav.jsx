import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import Register from './Register';

function Main_Nav() {
  const [Main_nv, setMain_nv] = useState(false);

  const navRef = useRef(null);

  const handleClick = () => setMain_nv(!Main_nv);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMain_nv(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <div>
      <nav ref={navRef} className='flex  justify-between p-2 bg-[#D9FFCF] fixed w-full items-center  border-b top-0   z-10 text-[1.1rem]'>
        <Link>
          <img className="w-[10rem] h-auto object-cover" src="..\src\assets\TeamAassets\companyLogo.png" alt="Logo" />
        </Link>

        <ul className='hidden md:flex gap-4'>
          <Link to=''><li>About Us</li></Link>
          <Link to=''><li>Contact Us</li></Link>
          <Link to=''><li>Verification</li></Link>
        </ul>

        <div className='md:hidden z-10' onClick={handleClick}>
          {Main_nv ? <FaTimes size={30} /> : <RxHamburgerMenu size={30} />}
        </div>

        <ul className={`${
          Main_nv
            ? 'opacity-100 transform translate-y-5 '
            : 'opacity-0 transform -translate-y-full'
          } transition-transform absolute  top-0 right-0 w-[16rem] h-[15rem] justify-center bg-[#d9ffcfcc] flex flex-col items-center text-2xl`}
          onClick={() => setMain_nv(false)}>
          <Link to='' className='w-full flex justify-center items-center  hover:bg-green-500 hover:text-white hover:mr-5'><li className='pt-2' >About Us</li></Link>
          <Link to='' className='w-full flex justify-center items-center  hover:bg-green-500 hover:text-white hover:mr-5'><li className='pt-2 '>Contact Us</li></Link>
          <Link to=''className='w-full flex justify-center items-center  hover:bg-green-500 hover:text-white hover:mr-5'><li className='pt-2'>Verification</li></Link>
        </ul>

<div className='md:flex hidden gap-[1rem] text-white '>
        <Link>
        <button className='h-[2rem] w-[5rem] bg-[#126912] text-xs font-bold rounded hover:bg-white hover:text-[#126912] hover:border-[.1rem] hover:border-[#126912]'>
                    Register
           </button>
        </Link>
        <Link>
        <button className='h-[2rem] w-[5rem] bg-[#126912] text-xs font-bold rounded hover:bg-white hover:text-[#126912] hover:border-[.1rem] hover:border-[#126912]'>
               Login
           </button>
         </Link>
</div>
      </nav>
    </div>
  );
}

export default Main_Nav;

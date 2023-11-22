import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { Link } from 'react-router-dom'

const Sidenav = () => {
  
  
  const [mobileShow, setMobileShow] = useState(false);
  const handleNav = (e) => {
    console.log(e);
    setMobileShow(!mobileShow);
    console.log("state changed");
  };
 
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className={mobileShow ? `absolute top-4 right-4 z-[99] md:hidden  text-red-800 text-3xl cursor-pointer `: `absolute top-4 right-4 z-[99] md:hidden  text-white text-3xl cursor-pointer `}
      />

      {/* {nav ? ( */}
      <div className={mobileShow ? `duration-1000 transition-opacity opacity-100 ease-in-out fixed w-full h-screen bg-gray-100 flex flex-col justify-center items-center z-20 `: `opacity-0 h-0 `}>
          <Link
            to="/"
            onClick={() => setMobileShow(!mobileShow)}
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-red-800 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 nav-item `}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>

          <Link
            to="/AboutMe"
            onClick={() => setMobileShow(!mobileShow)}
            className={` w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-red-800 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 nav-item`}
          >
            <GrProjects size={20} />
            <span className="pl-4">About me</span>
          </Link>

          <Link
            to="/Portfolio"
            onClick={() => setMobileShow(!mobileShow)}
            className={` w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-red-800 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 nav-item`}
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Portfolio</span>
          </Link>

          <Link
            to="/ContactMe"
            onClick={() => setMobileShow(!mobileShow)}
            className={` w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-red-800 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 nav-item`}
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </Link>

          <Link
            to="/Resume"
            onClick={() => setMobileShow(!mobileShow)}
            className={` w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-red-800 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 nav-item`}
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </Link>
        </div>
      {/* // ) : (
      //   ""
      // )} */}
      <div className="md:block hidden fixed top-[25%] z-10 ml-8">
        <div className="flex flex-col">
          <a
            href="/"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-red-600 text-red-700 hover:text-white"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="/aboutMe"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-red-600 text-red-700 hover:text-white"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="/portfolio"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-red-600 text-red-700 hover:text-white"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="/contactMe"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-red-600 text-red-700 hover:text-white"
          >
            <AiOutlineMail size={20} />
          </a>
          <a
            href="/resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-red-600 text-red-700 hover:text-white"
          >
            <BsPerson size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

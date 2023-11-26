import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";

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
        className={
          mobileShow
            ? `absolute right-4 top-4 z-[99] cursor-pointer  text-4xl text-[#1d7829] md:hidden `
            : `absolute right-4 top-4 z-[99] cursor-pointer  text-4xl text-white md:hidden `
        }
      />

      <div
        className={
          mobileShow
            ? `fixed z-20 flex h-screen w-full flex-col items-center justify-center bg-gray-100 opacity-100 transition-opacity duration-1000 ease-in-out `
            : `h-0 hidden`
        }
      >
        <Link
          to="/"
          onClick={() => setMobileShow(!mobileShow)}
          className={`nav-item m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-[#1d7829] p-4 text-white shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110 `}
        >
          <AiOutlineHome size={20} />
          <span className="pl-4">Home</span>
        </Link>

        <Link
          to="/AboutMe"
          onClick={() => setMobileShow(!mobileShow)}
          className={` nav-item m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-[#1d7829] p-4 text-white shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110`}
        >
          <GrProjects size={20} />
          <span className="pl-4">About me</span>
        </Link>

        <Link
          to="/Portfolio"
          onClick={() => setMobileShow(!mobileShow)}
          className={` nav-item m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-[#1d7829] p-4 text-white shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110`}
        >
          <AiOutlineProject size={20} />
          <span className="pl-4">Portfolio</span>
        </Link>

        <Link
          to="/ContactMe"
          onClick={() => setMobileShow(!mobileShow)}
          className={` nav-item m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-[#1d7829] p-4 text-white shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110`}
        >
          <AiOutlineMail size={20} />
          <span className="pl-4">Contact</span>
        </Link>

        <Link
          to="/Resume"
          onClick={() => setMobileShow(!mobileShow)}
          className={` nav-item m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-[#1d7829] p-4 text-white shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110`}
        >
          <BsPerson size={20} />
          <span className="pl-4">Resume</span>
        </Link>
      </div>

      <div className="fixed top-[25%] z-10 ml-8 hidden md:block">
        <div className="flex flex-col items-center">
          <a
            href="/"
            className="m-2 cursor-pointer rounded-full bg-gray-100 p-4 text-[#1d7829] shadow-lg shadow-gray-700 duration-300 ease-in hover:scale-110 hover:bg-[#1d7829] hover:text-white"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="/AboutMe"
            className="m-2 cursor-pointer rounded-full bg-gray-100 p-4 text-[#1d7829] shadow-lg shadow-gray-700 duration-300 ease-in hover:scale-110 hover:bg-[#1d7829] hover:text-white"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="/Portfolio"
            className="m-2 cursor-pointer rounded-full bg-gray-100 p-4 text-[#1d7829] shadow-lg shadow-gray-700 duration-300 ease-in hover:scale-110 hover:bg-[#1d7829] hover:text-white"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="/ContactMe"
            className="m-2 cursor-pointer rounded-full bg-gray-100 p-4 text-[#1d7829] shadow-lg shadow-gray-700 duration-300 ease-in hover:scale-110 hover:bg-[#1d7829] hover:text-white"
          >
            <AiOutlineMail size={20} />
          </a>
          <a
            href="/Resume"
            className="m-2 cursor-pointer rounded-full bg-gray-100 p-4 text-[#1d7829] shadow-lg shadow-gray-700 duration-300 ease-in hover:scale-110 hover:bg-[#1d7829] hover:text-white"
          >
            <BsPerson size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

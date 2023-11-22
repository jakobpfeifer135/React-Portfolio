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
  
  const [nav, setNav] = useState(false);
  const handleNav = () => {

    setNav(!nav);
    console.log("state changed");
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden text-white text-3xl"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-[#405757] flex flex-col justify-center items-center z-20 nav ">
          <Link
            to="/Home"
            className={"nav-link ${currentPage === '/Home' ? 'active' : ''} w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 nav-item"}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>

          <Link
            to="/AboutMe"
            className={"nav-link ${currentPage === '/AboutMe' ? 'active' : ''} w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 nav-item"}
          >
            <GrProjects size={20} />
            <span className="pl-4">About me</span>
          </Link>

          <Link
            to="/Portfolio"
            className={"nav-link ${currentPage === '/Portfolio' ? 'active' : ''} w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 nav-item"}
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Portfolio</span>
          </Link>

          <Link
            to="/ContactMe"
            className={"nav-link ${currentPage === '/ContactMe' ? 'active' : ''} w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 nav-item"}
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </Link>

          <Link
            to="/Resume"
            className={"nav-link ${currentPage === '/Resume' ? 'active' : ''} w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 nav-item"}
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="/home"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="/aboutMe"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="/portfolio"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="/contactMe"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
          <a
            href="/resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

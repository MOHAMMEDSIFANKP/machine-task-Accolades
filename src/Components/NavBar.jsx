import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo/logo.png';
import './NavBar.css';

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [openNav, setOpenNav] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setOpenNav(prevState => !prevState);
  };

  return (
    <div className='grid grid-cols-2 h-[4.3rem] lg:h-[5.5rem]  bg-opacity-10 bg-gray-100'>
      <div className='flex items-center'>
        <img src={Logo} className='ms-10' alt="Company Logo" />
      </div>
      <div className={`${openNav ? "flex justify-center items-center" : "flex justify-end me-10 items-center"}`}>
        {isSmallScreen ? (
          <button onClick={toggleNav}>
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        ) : (
          <ul className="flex space-x-4 w-full gap-5 justify-center items-center h-full ">
            <li><Link to="/" className={`text-[17px] text-white ${currentPath == '/' ? "font-bold " : "opacity-[0.7]"}`}>Home</Link></li>
            <li><Link to="/corporate" className={`text-[17px] text-white ${currentPath == '/corporate' ? "font-bold " : "opacity-[0.7]"}`}>Corporate</Link></li>
            <li><Link to="/projects" className={`text-[17px] text-white ${currentPath == '/projects' ? "font-bold " : "opacity-[0.7]"}`}>Projects</Link></li>
            <li><Link to="/testimonials" className={`text-[17px] text-white ${currentPath == '/testimonials' ? "font-bold " : "opacity-[0.7]"}`}>Testimonials</Link></li>
              {/* <li><Link to="/rentals" className={`text-[17px] text-white ${currentPath == '/rentals' ? "font-bold " : "opacity-[0.7]"}`}>Rentals</Link></li>
              <li><Link to="/blogs" className={`text-[17px] text-white ${currentPath == '/blogs' ? "font-bold " : "opacity-[0.7]"}`}>Blogs</Link></li>
              <li><Link to="/media" className={`text-[17px] text-white ${currentPath == '/media' ? "font-bold " : "opacity-[0.7]"}`}>Media</Link></li>
              <li><Link to="/contact" className={`text-[17px] text-white ${currentPath == '/contact' ? "font-bold " : "opacity-[0.7]"}`}>Contact</Link></li> */}
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;

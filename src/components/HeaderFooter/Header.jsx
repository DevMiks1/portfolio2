// import hooks
import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
// import image
import logo from "../../assets/logo.png"


export const Header = () => {
const location = useLocation();

const [activeLink, setActiveLink] = useState('');

useEffect(() => {
  const handleScroll = () => {
    const sections = ['home', 'about', 'tech', 'project', 'contact'];
    const scrollPosition = window.scrollY;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (!element) continue;

      const offsetTop = element.offsetTop - 100; // Adjust this value as needed

      console.log(`Section: ${section}, OffsetTop: ${offsetTop}, ScrollPosition: ${scrollPosition}`);

      if (scrollPosition >= offsetTop) {
        setActiveLink(section);

        // Set the hash manually to update the URL
        window.history.replaceState({}, '', `#${section}`);
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

useEffect(() => {
  // Update the URL hash based on the activeLink
  if (activeLink) {
    window.location.hash = `#${activeLink}`;
  }
}, [activeLink]);

  return (
    // flowbite libraries
    <nav id="navbar" 
    className=" fixed w-full z-30 bg-navbar ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* logo and Name */}
        <a href="#home" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="head" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mike | Web Developer</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-primary dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">

          {/* list e.g(home,about,contact) */}
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
                <a href="#home" className={`nav-link block py-2 pl-3 pr-4 hover:text-primary rounded md:bg-transparent md:p-0 ${location.hash === '#home' ? 'active' : ''}`}aria-current="page">Home</a>
            </li>
            <li>
                <a href="#about" className={`nav-link block py-2 pl-3 pr-4 hover:text-primary rounded md:bg-transparent md:p-0 ${location.hash === '#about' ? 'active' : ''}`}>About</a>
            </li>
            <li>
              <a href="#tech" className={`nav-link block py-2 pl-3 pr-4 hover:text-primary rounded md:bg-transparent md:p-0 ${location.hash === '#tech' ? 'active' : ''}`}>Tech</a>
            </li>
            <li>
              <a href="#project" className={`nav-link block py-2 pl-3 pr-4 hover:text-primary rounded md:bg-transparent md:p-0 ${location.hash === '#project' ? 'active' : ''}`}>Project</a>
            </li>
            <li>
              <a href="#contact" className={`nav-link block py-2 pl-3 pr-4 hover:text-primary rounded md:bg-transparent md:p-0 ${location.hash === '#contact' ? 'active' : ''}`}>Contact</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

  )
}

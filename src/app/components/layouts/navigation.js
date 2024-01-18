import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes';
import React, { useEffect, useState } from 'react';
import lottie from "lottie-web";



export default function Navigation() {
  const [scrolling, setScrolling] = useState(false);
   
    useEffect(() => {
      const handleScroll = () => {
        // Set scrolling to true when the user scrolls beyond 5rem
        setScrolling(window.scrollY > 120); // 1rem = 16px, so 5rem = 80px
      };
   
      // Attach the scroll event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
   
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const location = useLocation();
  
    const isActive = (path) => {
      return location.pathname === path;
    };
  
    return (
<nav className="fixed top-0 z-[100] mb-[3rem]">
  <ul className={`text-[17px] flex items-center gap-[3rem] transition-all duration-300  m-[2rem] text-standard-grey ${scrolling ? 'bg-standard-blur' : ''} pr-[3rem] pl-[3rem] pt-[0.9rem] pb-[0.9rem] rounded-[5rem] backdrop-blur`}>
    <li className={isActive(ROUTES.HOME) ? 'active-link bg-standard-blur' : ''}><Link to={ROUTES.HOME}>Home</Link></li>
    <li className={isActive(ROUTES.ABOUT) ? 'active-link bg-standard-blur' : ''}><Link to={ROUTES.ABOUT}>About</Link></li>
    <li className={isActive(ROUTES.PROJECTS) ? 'active-link bg-standard-blur' : ''}><Link to={ROUTES.PROJECTS}>Projects</Link></li>
    <li className={isActive(ROUTES.BLOGS) ? 'active-link bg-standard-blur' : ''}><Link to={ROUTES.BLOGS}>Blogs</Link></li>
    <li className={isActive(ROUTES.CONTACT) ? 'active-link bg-standard-blur' : ''}><Link to={ROUTES.CONTACT}>Contact</Link></li>
  </ul>
</nav>
    );
};
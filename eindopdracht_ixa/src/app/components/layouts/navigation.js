import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes';


export default function Navigation() {
    const location = useLocation();
  
    const isActive = (path) => {
      return location.pathname === path;
    };
  
    return (
<nav className="fixed top-0 z-10 mb-[3rem]">
  <ul className='text-[17px] flex gap-[3rem] m-[2rem] text-standard-grey bg-standard-blur pr-[3rem] pl-[3rem] pt-[0.9rem] pb-[0.9rem] rounded-[5rem] backdrop-blur'>
    <li><Link to={ROUTES.HOME} className={isActive(ROUTES.HOME) ? 'active-link bg-standard-blur' : ''}>Home</Link></li>
    <li><Link to={ROUTES.ABOUT} className={isActive(ROUTES.ABOUT) ? 'active-link bg-standard-blur' : ''}>About</Link></li>
    <li><Link to={ROUTES.PROJECTS} className={isActive(ROUTES.PROJECTS) ? 'active-link bg-standard-blur' : ''}>Projects</Link></li>
    <li><Link to={ROUTES.CONTACT} className={isActive(ROUTES.CONTACT) ? 'active-link bg-standard-blur' : ''}>Contact</Link></li>
  </ul>
</nav>
    );
};
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes';


export default function Navigation() {
    const location = useLocation();
  
    const isActive = (path) => {
      return location.pathname === path;
    };
  
    return (
<nav className="fixed top-0 z-10 mb-[3rem]">
  <ul className='text-[17px] flex items-center gap-[3rem] m-[2rem] text-standard-grey bg-standard-blur pr-[3rem] pl-[3rem] pt-[0.9rem] pb-[0.9rem] rounded-[5rem] backdrop-blur'>
    <li className={isActive(ROUTES.HOME) ? 'active-link bg-standard-blur' : ''}><Link to={ROUTES.HOME}>Home</Link></li>
    <li className={isActive(ROUTES.ABOUT) ? 'active-link bg-standard-blur' : ''}><Link to={ROUTES.ABOUT}>About</Link></li>
    <li className={isActive(ROUTES.PROJECTS) ? 'active-link bg-standard-blur' : ''}><Link to={ROUTES.PROJECTS}>Projects</Link></li>
    <li className={isActive(ROUTES.CONTACT) ? 'active-link bg-standard-blur' : ''}><Link to={ROUTES.CONTACT}>Contact</Link></li>
  </ul>
</nav>
    );
};
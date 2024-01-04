import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes';


export default function Navigation() {
    const location = useLocation();
  
    const isActive = (path) => {
      return location.pathname === path;
    };
  
    return (
            <nav className="fixed top-0 mb-[3rem]">
                <ul className='text-[17px] flex gap-[3rem] m-[2rem] text-standard-white pr-[3rem] pl-[3rem] pt-[0.5rem] pb-[0.5rem] bg-purple-700 rounded-[5rem]'>
                    <li><Link to={ROUTES.HOME} className={isActive(ROUTES.HOME) ? 'active-link' : ''}>Home</Link></li>
                    <li><Link to={ROUTES.ABOUT} className={isActive(ROUTES.ABOUT) ? 'active-link' : ''}>About</Link></li>
                    <li><Link to={ROUTES.PROJECTS} className={isActive(ROUTES.PROJECTS) ? 'active-link' : ''}>Projects</Link></li>
                    <li><Link to={ROUTES.CONTACT} className={isActive(ROUTES.CONTACT) ? 'active-link' : ''}>Contact</Link></li>
                </ul>
            </nav>
    );
};
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';


export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to={ROUTES.HOME}>Home</Link></li>
                <li><Link to={ROUTES.ABOUT}>About</Link></li>
                <li><Link to={ROUTES.PROJECTS}>Projects</Link></li>
                <li><Link to={ROUTES.CONTACT}>Contact</Link></li>
            </ul>
        </nav>
    );
};
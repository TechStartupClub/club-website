import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import mainLogo from '../../assets/logos/Tech Startup Club Logo.png'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={mainLogo} alt="logo"/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" className="events-link" to="/events">
                    Events
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                    Projects
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="blog-link" to="/blog">
                    Blog
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    About
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    Contact
                </NavLink>           
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    Join us
                </NavLink>
            </nav>
        </div>
    );
};

export default NavBar;
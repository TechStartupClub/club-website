import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import mainLogo from '../../assets/logos/W-Logo_White.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faCalendar, faHammer, faHome, faInfo, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={mainLogo} alt="logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faInfo} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="blog-link" to="/blog">
                <FontAwesomeIcon icon={faBlog} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faHammer} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="events-link" to="/events">
                <FontAwesomeIcon icon={faCalendar} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faMailBulk} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/UWTechStartUpClub'>
                    <FontAwesomeIcon icon={faSquareGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://discord.gg/dkWsu9a4'>
                    <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar;
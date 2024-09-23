
import { Link } from 'react-router-dom';
import './index.scss';
import wLogo from '../../assets/logos/W-Logo_White.png'

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello,<br /> We're
                The Tech Start Up Club
                <br />
                </h1>
                <h2>Study Sessions / HW Help / Team Projects / Career Development</h2>
                <Link to="/contact" className='flat-button'>CONTACT US</Link>
            </div>
            <div className="about-img">
                <img className="UW-logo" src={wLogo} alt="University of Washington W Logo" />
            </div>
        </div>
    )
}

export default Home
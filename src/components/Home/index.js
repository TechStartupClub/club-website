
import { Link } from 'react-router-dom';
import './index.scss';
import Logo from '../Logo';

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi,<br /> We're
                The Tech Start Up Club
                <br />
                </h1>
                <h2>Study Sessions / HW Help / Team Projects / Career Development</h2>
                <Link to="/contact" className='flat-button'>CONTACT US</Link>
            </div>
        </div>
    )
}

export default Home
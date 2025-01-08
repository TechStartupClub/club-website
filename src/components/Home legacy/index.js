import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>TECH STARTUP CLUB</h1>
                <h2>Full-Stack development at the University of Washington</h2>                
                <Link to="/contact" className='flat-button'>Join us</Link>
            </div>
        </div>
    )
 }

export default Home
import React from 'react';
import style from './style/home.module.scss';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Orange from '../assets/images/Orange Pin.png';

const Home = () => {
    return (
        <>
            <div className={style.layoutWrapper}>
            <NavBar />
            <div className={style.container}>
                <div className={style.homeSection}>
                    {/* Top Right Corner Cluster */}
                    <img src={Orange} alt="" className={style.topRightOrange1} />
                    <img src={Orange} alt="" className={style.topRightOrange2} />
                    <img src={Orange} alt="" className={style.topRightOrange3} />
                    <img src={Orange} alt="" className={style.topRightOrange4} />
                    <img src={Orange} alt="" className={style.topRightOrange5} />
                    
                    {/* Bottom Left Corner Cluster */}
                    <img src={Orange} alt="" className={style.bottomLeftOrange1} />
                    <img src={Orange} alt="" className={style.bottomLeftOrange2} />
                    <img src={Orange} alt="" className={style.bottomLeftOrange3} />
                    <img src={Orange} alt="" className={style.bottomLeftOrange4} />
                    <img src={Orange} alt="" className={style.bottomLeftOrange5} />
                    
                    <h1>TECH STARTUP CLUB</h1>
                    <h2>Full-Stack development at the University of Washington</h2>
                    <Link to="/contact" className={style.flatButton}>Join us</Link>
                </div>
            </div>
            <Footer />
            </div>
        </>
    )
}

export default Home
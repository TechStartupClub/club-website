// Home.jsx
import React from 'react';
import style from './style/home.module.scss';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <NavBar />
            <div className={style.container}>
                <div className={style.homeSection}>
                    <h1>TECH STARTUP CLUB</h1>
                    <h2>Full-Stack development at the University of Washington</h2>
                    <Link to="/contact" className={style.flatButton}>Join us</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
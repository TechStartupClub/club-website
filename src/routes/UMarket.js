import React from 'react';
import style from './style/umarket.module.scss';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
// import { GiUrsaMajor } from 'react-icons/gi';
import UMarketVideo from '../assets/images/UMarket/videos/UMarket demo.mov';

const UMarket = () => {
    return (
        <>
            <div className={style.layoutWrapper}>
            <NavBar />
            <div className={style.mainContent}>
                <div className={style.videoBox}>
                    <video autoPlay muted loop playsInline>
                        <source src={UMarketVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
            <Footer />
            </div>
        </>
    )
}

export default UMarket
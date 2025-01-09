import React from 'react';
import style from './style/events.module.scss';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

import Calendar from '../components/Calendar'

const Events = () => {
    return (
        <div className={style.layoutWrapper}>
            <NavBar />
            <div className={style.mainContent}>
                <div className={style.calendarContainer}>
                    <Calendar />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Events
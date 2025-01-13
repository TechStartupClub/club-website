import React from 'react';
import style from './style/events.module.scss';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Calendar from '../components/Calendar';

const Events = () => {
    return (
        <div className={style.layoutWrapper}>
            <NavBar />
            <div className={style.mainContent}>
                <section className={style.header}>
                    <div className={style.content}>
                        <h1>Club Events & Meetings</h1>
                        <p>Stay updated with our meetings, workshops, and special events. Join us every Monday and Thursday!</p>
                    </div>
                </section>
                <div className={style.calendarSection}>
                    <Calendar />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Events;
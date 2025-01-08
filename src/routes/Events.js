import React from 'react';
import style from './style/events.module.scss';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

import Calendar from '../components/Calendar'

const Events = () => {

    return (
        <>
        <NavBar />
        <Calendar />
        <Footer />
        </>
    )
}

export default Events
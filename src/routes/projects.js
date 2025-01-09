import React from 'react';
import style from './style/projects.module.scss';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

import mainLogo from '../assets/logos/W-Logo_White.png';
import Card from '../components/Card'

const Projects = () => {

    return (
        <>
            <NavBar />
            <div className="conatiner project-page">
                <div className="text-zone">
                    <h1>
                        Recent Projects Our Club Has Created!
                    </h1>
                </div>
                <div className="project-container">
                    <Card  imgSrc={mainLogo} imgAlt='Event picture' title="First Club Project" description="Homework Help at the UW Tacoma Library from 4pm-7pm. All porjects, assignments, and studying welcome!" btnText="Learn More" link="https://discord.gg/dkWsu9a4"/>
                    <Card  imgSrc={mainLogo} imgAlt='Event picture' title="Our Website Code!" description="Check out the source code for this website! Bootstrapped with React and Hosted by Netlify!" btnText="Learn More" link="https://github.com/UWTechStartUpClub/Club-Website"/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Projects
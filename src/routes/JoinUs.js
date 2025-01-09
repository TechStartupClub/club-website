import React from 'react';
import style from './style/joinus.module.scss';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faUsers, faLaptopCode, faHandshake } from '@fortawesome/free-solid-svg-icons';

const JoinUs = () => {
    return (
        <>
            <NavBar />
            <div className={style.container}>
                <section className={style.hero}>
                    <h1>Join Tech Startup Club</h1>
                    <p>Be part of UW's most innovative community of future entrepreneurs and tech leaders</p>
                    <a href="https://discord.gg/SPJnwq5hPk" target="_blank" rel="noopener noreferrer" className={style.cta}>
                        Join Our Discord
                    </a>
                </section>

                <section className={style.benefits}>
                    <h2>Why Join Us?</h2>
                    <div className={style.benefitsGrid}>
                        <div className={style.benefitCard}>
                            <FontAwesomeIcon icon={faRocket} className={style.icon} />
                            <h3>Launch Your Ideas</h3>
                            <p>Turn your innovative concepts into real startups with guidance from experienced mentors</p>
                        </div>
                        <div className={style.benefitCard}>
                            <FontAwesomeIcon icon={faUsers} className={style.icon} />
                            <h3>Network</h3>
                            <p>Connect with like-minded students, industry professionals, and potential co-founders</p>
                        </div>
                        <div className={style.benefitCard}>
                            <FontAwesomeIcon icon={faLaptopCode} className={style.icon} />
                            <h3>Learn & Grow</h3>
                            <p>Gain practical skills in entrepreneurship, technology, and business development</p>
                        </div>
                        <div className={style.benefitCard}>
                            <FontAwesomeIcon icon={faHandshake} className={style.icon} />
                            <h3>Collaborate</h3>
                            <p>Work on exciting projects and participate in hackathons and startup competitions</p>
                        </div>
                    </div>
                </section>

                <section className={style.getStarted}>
                    <h2>How to Get Started</h2>
                    <div className={style.steps}>
                        <div className={style.step}>
                            <span className={style.stepNumber}>1</span>
                            <p>Join our Discord community</p>
                        </div>
                        <div className={style.step}>
                            <span className={style.stepNumber}>2</span>
                            <p>Attend our next meeting</p>
                        </div>
                        <div className={style.step}>
                            <span className={style.stepNumber}>3</span>
                            <p>Get involved in projects</p>
                        </div>
                    </div>
                    <div className={style.action}>
                        <p>Ready to begin your entrepreneurial journey?</p>
                        <a href="https://discord.gg/SPJnwq5hPk" target="_blank" rel="noopener noreferrer" className={style.cta}>
                            Join Now
                        </a>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default JoinUs;
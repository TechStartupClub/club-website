import React from 'react';
import style from './style/joinus.module.scss';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faUsers, faLaptopCode, faHandshake, faBriefcase, faUserTie } from '@fortawesome/free-solid-svg-icons';

const JoinUs = () => {
    return (
        <>
            <NavBar />
            <div className={style.container}>
                <section className={style.hero}>
                    <div className={style.content}>
                        <h1>Build Real-World Tech Projects</h1>
                        <p>Join UW's hub for building production-grade applications with React, Node.js, Python, AWS, and more. Gain the exact skills that tech companies are hiring for.</p>
                        <a href="https://discord.gg/SPJnwq5hPk" target="_blank" rel="noopener noreferrer" className={style.cta}>
                            Join Our Community
                        </a>
                    </div>
                </section>

                <section className={style.benefits}>
                    <h2>Why You'll Love Being Here</h2>
                    <div className={style.benefitsGrid}>
                        <div className={style.benefitCard}>
                            <FontAwesomeIcon icon={faRocket} className={style.icon} />
                            <h3>Build Full-Stack Apps</h3>
                            <p>Create production-ready applications using React, TypeScript, Node.js, PostgreSQL, and AWS. Deploy with Docker and CI/CD pipelines.</p>
                        </div>
                        <div className={style.benefitCard}>
                            <FontAwesomeIcon icon={faUsers} className={style.icon} />
                            <h3>Master Modern Tech</h3>
                            <p>Learn industry tools like Git, Agile/Scrum, testing (Jest, Pytest), and cloud services (AWS, GCP). Build your GitHub portfolio.</p>
                        </div>
                        <div className={style.benefitCard}>
                            <FontAwesomeIcon icon={faLaptopCode} className={style.icon} />
                            <h3>Build ML & AI Apps</h3>
                            <p>Create projects with Python, TensorFlow, PyTorch, and ChatGPT API. Work on computer vision, NLP, and generative AI applications.</p>
                        </div>
                        <div className={style.benefitCard}>
                            <FontAwesomeIcon icon={faHandshake} className={style.icon} />
                            <h3>Mobile & Web Apps</h3>
                            <p>Develop cross-platform apps using React Native, Flutter, and progressive web apps (PWAs). Learn UI/UX with modern CSS frameworks.</p>
                        </div>
                        <div className={style.benefitCard}>
                            <FontAwesomeIcon icon={faBriefcase} className={style.icon} />
                            <h3>Industry-Standard Projects</h3>
                            <p>Build the same tech that companies use: microservices architecture, RESTful APIs, OAuth authentication, scalable databases, and enterprise-grade security practices.</p>
                        </div>
                        <div className={style.benefitCard}>
                            <FontAwesomeIcon icon={faUserTie} className={style.icon} />
                            <h3>Work Like a Tech Company</h3>
                            <p>Join specialized teams with dedicated roles: Frontend, Backend, DevOps, UI/UX, and Product Management. Experience real Agile workflows with standups and sprints.</p>
                        </div>
                    </div>
                </section>

                <section className={style.getStarted}>
                    <h2>Launch Your Tech Career Today</h2>
                    <div className={style.steps}>
                        <div className={style.step}>
                            <span className={style.stepNumber}>1</span>
                            <p>Join our active Discord for project teams & tech discussions</p>
                        </div>
                        <div className={style.step}>
                            <span className={style.stepNumber}>2</span>
                            <p>Choose a project track: Web, Mobile, AI/ML, or Cloud</p>
                        </div>
                        <div className={style.step}>
                            <span className={style.stepNumber}>3</span>
                            <p>Build your portfolio with industry-standard projects</p>
                        </div>
                    </div>
                    <div className={style.action}>
                        <p>Ready to build production-grade applications?</p>
                        <a href="https://discord.gg/SPJnwq5hPk" target="_blank" rel="noopener noreferrer" className={style.cta}>
                            Join Us Now
                        </a>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default JoinUs;
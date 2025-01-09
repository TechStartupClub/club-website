import React from 'react';
import style from './style/projects.module.scss';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import mainLogo from '../assets/logos/W-Logo_White.png';
import ClubWebsite from '../assets/images/ClubWebsite/Screenshot 2025-01-09 at 8.35.34 AM.png';
import UMarket from '../assets/images/UMarket/UMarket.PNG';
import UWealth from '../assets/images/UWealth/images/Front page.png';

const projects = [
    {
        name: 'UMarket 2025',
        image: UMarket,
        description: 'A marketplace for university students to buy and sell. Built with React, TypeScript Front-end. Node.js, Express Back-end. Python with Pandas and PyTorch for Machine Learning, AWS for cloud, and PostgreSQL for database.',
        github: 'https://github.com/TechStartupClub/UMarket',
        route: '/projects/UMarket'
    },
    {
        name: 'UWealth 2024',
        image: UWealth,
        description: 'Stock tracking application with user managment, market data, portfolio management, and analyst recommendations. Data from Alpha Vantage presented by React, JavaScript Front-end. Restful API handled by Express, Node.js Back-end server. User database handled by PostgreSQL.',
        github: 'https://github.com/TechStartupClub/UWealth',
        route: '/projects/UWealth'
    },
    {
        name: 'Club Website 2024',
        image: ClubWebsite,
        description: 'The official Tech Startup Club website built with React, JavaScript, HTML, CSS.',
        github: 'https://github.com/TechStartupClub/club-website',
        route: '/'
    }
];

const ProjectCard = ({ project }) => {
    return (
        <div className={style.projectCard}>
            <Link to={project.route} className={style.cardContent}>
                <div className={style.imageContainer}>
                    <img src={project.image} alt={project.name} />
                </div>
                <div className={style.projectInfo}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.githubLink}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FaGithub /> View on GitHub
                    </a>
                </div>
            </Link>
        </div>
    );
};

const Projects = () => {
    return (
        <div className={style.layoutWrapper}>
            <NavBar />
            <div className={style.container}>
                <div className={style.projectsSection}>
                    <h1>Our Projects</h1>
                    <div className={style.projectsGrid}>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
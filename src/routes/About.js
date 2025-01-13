import React from 'react';
import style from './style/about.module.scss';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import celestin from '../assets/images/Profile-Photos/celestin.jpeg';
import jacobKlymenko from '../assets/images/Profile-Photos/jacobKylmenko.jpeg';
import nickJordan from '../assets/images/Profile-Photos/nickJordan.jpeg';
import primoBambao from '../assets/images/Profile-Photos/primoBambao.jpeg';
import prestonSia from '../assets/images/Profile-Photos/prestonSia.jpeg';
import fernandoOlivarNeri from '../assets/images/Profile-Photos/fernandoOlivarNeri.jpeg';
import alexYu from '../assets/images/Profile-Photos/alexYu.jpg';
import johnDiego from '../assets/images/Profile-Photos/johnDiego.jpeg';
import Orange from '../assets/images/Orange Pin.png';

const teamMembers = [
    { 
        name: 'Celestin Ryf', 
        img: celestin, 
        description: 'President',
        socials: {
            email: 'celestinryf@gmail.com',
            linkedin: 'https://linkedin.com/in/celestin-ryf',
            github: 'https://github.com/celestinryf'
        }
    },
    { 
        name: 'Nick Jordan', 
        img: nickJordan, 
        description: 'Full-stack Lead',
        socials: {
            email: 'njordan1@uw.edu',
            linkedin: 'http://linkedin.com/in/nicholas-jordan-a979a32a9',
            github: 'https://github.com/NickJordan-BE'
        }
    },
    { 
        name: 'Jacob Klymenko', 
        img: jacobKlymenko, 
        description: 'Back-end Lead',
        socials: {
            email: 'jacobkly@uw.edu',
            linkedin: 'https://www.linkedin.com/in/jacob-kly/',
            github: 'https://github.com/jacobkly'
        }
    },
    { 
        name: 'Preston Sia', 
        img: prestonSia, 
        description: 'Front-end Lead',
        socials: {
            email: 'psia97@uw.edu',
            linkedin: 'https://www.linkedin.com/in/preston-sia-10a542304',
            github: 'https://github.com/presia27/'
        }
    },
    { 
        name: 'Primitivo Bambao', 
        img: primoBambao, 
        description: 'Design Lead',
        socials: {
            email: 'lumikhaiv@gmail.com',
            linkedin: 'https://www.linkedin.com/in/primitivo-bambao/',
            github: 'https://github.com/abstrcted'
        }
    },
    { 
        name: 'Anthony Nadyuk', 
        img: Orange, 
        description: 'Mobile Lead',
        socials: {
            email: '',
            linkedin: 'https://www.linkedin.com/in/anthony-n-0625702a5/',
            github: 'https://github.com/antnay'
        }
    },
    { 
        name: 'Fernando Olivar Neri', 
        img: fernandoOlivarNeri, 
        description: 'Front-end Developer',
        socials: {
            email: '',
            linkedin: 'https://www.linkedin.com/in/foneri/',
            github: 'https://github.com/Feekly'
        }
    },
    { 
        name: 'John Diego', 
        img: johnDiego, 
        description: 'Front-end Developer',
        socials: {
            email: '',
            linkedin: '',
            github: 'https://github.com/diego-menudo'
        }
    },
    { 
        name: 'Alex Yu', 
        img: alexYu, 
        description: 'Front-end Developer',
        socials: {
            email: '',
            linkedin: 'https://www.linkedin.com/in/alex-yu-2a419127b/',
            github: 'https://github.com/AlexY305'
        }
    },
    { 
        name: 'Nikita Bizyuk', 
        img: Orange, 
        description: 'Back-end Developer',
        socials: {
            email: '',
            linkedin: 'https://www.linkedin.com/in/nikita-bizyuk-7a32072b7/',
            github: 'https://github.com/NikitaBizyuk'
        }
    },
    { 
        name: 'Linda', 
        img: Orange, 
        description: 'Back-end-end Developer',
        socials: {
            email: '',
            linkedin: '',
            github: 'https://github.com/Linda-Miao'
        }
    },
    { 
        name: 'Austin Nguyen', 
        img: Orange, 
        description: 'Front-end Developer',
        socials: {
            email: '',
            linkedin: '',
            github: 'https://github.com/ASTN-NGYN'
        }
    },
    { 
        name: 'Luke Willis', 
        img: Orange, 
        description: 'Front-end Developer',
        socials: {
            email: 'lwillis@uw.edu',
            linkedin: 'https://www.linkedin.com/in/luke-willis-b26b00282/',
            github: 'https://github.com/luke-willis'
        }
    },
    { 
        name: 'James Escudero', 
        img: Orange, 
        description: 'Back-end Developer',
        socials: {
            email: '',
            linkedin: '',
            github: ''
        }
    },
    { 
        name: 'Renzo', 
        img: Orange, 
        description: 'Back-end Developer',
        socials: {
            email: 'aquinren@uw.edu',
            linkedin: 'https://www.linkedin.com/in/renzoserg-aquino-782744340/',
            github: 'https://github.com/uwRenRen'
        }
    }
];

const SocialLinks = ({ socials }) => {
    return (
        <div className={style.socialLinks}>
            {socials.email && (
                <a 
                    href={`mailto:${socials.email}`} 
                    aria-label="Email"
                    className={style.socialIcon}
                >
                    <MdEmail />
                </a>
            )}
            {socials.linkedin && (
                <a 
                    href={socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                    className={style.socialIcon}
                >
                    <FaLinkedin />
                </a>
            )}
            {socials.github && (
                <a 
                    href={socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub"
                    className={style.socialIcon}
                >
                    <FaGithub />
                </a>
            )}
        </div>
    );
};

const TeamCard = ({ member }) => {
    return (
        <div className={style.teamCard}>
            <img
                src={member.img} 
                alt={`Profile of ${member.name}`}
                className={style.profileImage}
            />
            <h2>{member.name}</h2>
            <p>{member.description}</p>
            {member.socials && <SocialLinks socials={member.socials} />}
        </div>
    );
};

const About = () => {
    return (
        <div className={style.layoutWrapper}>
            <NavBar />
            <section className={style.header}>
                <div className={style.content}>
                    <h1>About Us</h1>
                    <p>
                        We are a group of students at the University of Washington Tacoma, passionate about combining techonology and finance to create impactful solutions. 
                        Our current project is developing a stock tracker app designed to empower users with real time market insights, personalized portfolio tracking, 
                        and educational resources for smarter investing. With diverse backgrounds in coding, finance, and user experience design, we aim to create an intuitive 
                        and accessible platform that meets the needs of modern investors. At UW, we are proud to foster innovation and collaboration, turning ideas into tools 
                        that make a difference.
                    </p>                    
                </div>
            </section>
            <div className={style.container}>
                <section className={style.teamSection}>
                    <h1>Our Team</h1>
                    <div className={style.teamGrid}>
                        {teamMembers.map((member, index) => (
                            <TeamCard key={index} member={member} />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default About;
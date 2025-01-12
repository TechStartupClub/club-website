import React from 'react';
import style from './style/blog.module.scss';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import mainLogo from '../assets/logos/Tech Startup Club Logo.png';

const BlogCard = ({ imgSrc, imgAlt, title, description, btnText, link }) => (
    <div className={style.blogCard}>
        <div className={style.imageContainer}>
            <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className={style.content}>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className={style.button}>
                {btnText}
            </a>
        </div>
    </div>
);

const Blog = () => {
    const posts = [
        {
            imgSrc: mainLogo,
            imgAlt: 'Event picture',
            title: "First Official Meeting 9/25 Lunch Period!",
            description: "Join us for our inaugural All-Staff Meeting at the Mattress Factory during lunch! Meet the team, learn about our upcoming projects, and see how you can be part of building amazing tech.",
            btnText: "Join Discord",
            link: "https://discord.gg/dkWsu9a4"
        },
        {
            imgSrc: mainLogo,
            imgAlt: 'Event picture',
            title: "First Project Launch 10/7!",
            description: "Be part of our first full-stack project! Whether you're into frontend (React/TypeScript), backend (Node.js), or DevOps (AWS/Docker), there's a perfect role for you. Great for your portfolio!",
            btnText: "Get Involved",
            link: "https://discord.gg/dkWsu9a4"
        }
    ];

    return (
        <div className={style.layoutWrapper}>
            <NavBar />
            <div className={style.container}>
                <header className={style.header}>
                    <div className={style.content}>
                        <h1>Tech Startup Club News & Events</h1>
                        <p>Stay updated with our latest projects, meetings, and opportunities to build industry-standard applications.</p>
                    </div>
                </header>
                <div className={style.blogGrid}>
                    {posts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
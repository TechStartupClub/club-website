import './index.scss'
import mainLogo from '../../assets/logos/W-Logo_White.png';
import Card from '../Card'

const Blog = () => {

    return (
        <div className="conatiner blog-page">
            <div className="text-zone">
                <h1>
                    Recent Activities of The Club!
                </h1>
            </div>
            <div className="blog-container">
                <Card  imgSrc={mainLogo} imgAlt='Event picture' title="First Official Meeting 9/25 Lunch Period!" description="First All-Staff Meeting for the club in the Mattress Factory during lunch period. Come join us to see what the club is about and meet us!" btnText="Learn More" link="https://discord.gg/dkWsu9a4"/>
                <Card  imgSrc={mainLogo} imgAlt='Event picture' title="First Project 10/7!" description="We will be deciding our first club project by October 7th. It will be a full-stack application with the work being divided by roles on our discord server. All levels, roles, and people are welcome to join us and help develop this project to put on your resume!" btnText="Learn More" link="https://discord.gg/dkWsu9a4"/>
            </div>
        </div>
    )
}

export default Blog
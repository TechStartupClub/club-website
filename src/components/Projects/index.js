import './index.scss'
import mainLogo from '../../assets/logos/W-Logo_White.png';
import Card from '../Card'

const Projects = () => {

    return (
        <div className="conatiner blog-page">
            <div className="text-zone">
                <h1>
                    Recent Projects Our Club Has Created!
                </h1>
            </div>
            <div className="blog-container">
                <Card  imgSrc={mainLogo} imgAlt='Event picture' title="First Club Project" description="Homework Help at the UW Tacoma Library from 4pm-7pm. All porjects, assignments, and studying welcome!" btnText="Learn More" link="https://discord.gg/dkWsu9a4"/>
                <Card  imgSrc={mainLogo} imgAlt='Event picture' title="Our Website Code!" description="Homework Help at the UW Tacoma Library from 4pm-7pm. All porjects, assignments, and studying welcome!" btnText="Learn More" link="https://github.com/UWTechStartUpClub/Club-Website"/>
            </div>
        </div>
    )
}

export default Projects
import './index.scss'
import mainLogo from '../../assets/logos/main-logo.png';
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
                <Card  imgSrc={mainLogo} imgAlt='Event picture' title="Hw Help on 8/24" description="Homework Help at the UW Tacoma Library from 4pm-7pm. All porjects, assignments, and studying welcome!" btnText="Learn More" link="/"/>
                <Card  imgSrc={mainLogo} imgAlt='Event picture' title="Last Quarter Project" description="Take a look at last quarter's project where 10 team members collaborated to create a full-stack application with real world solutions for their resume!" btnText="Learn More" link="/"/>
            </div>
        </div>
    )
}

export default Blog
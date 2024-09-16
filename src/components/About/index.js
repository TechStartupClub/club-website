import "./index.scss"
import mixedLanguages from '../../assets/logos/Mixed-languages.png';

const About = () => {

    return (
        <div className="conatiner blog-page">
            <div className="text-zone">
                <h1>
                    The Tech Start Up Club
                </h1>
                <p>
                    Hello Everyone! We are a computer science club at UW Tacoma which specializes in creating full-stack applications with solutions to real world problems.
                    We do this through mimicing the workspace of a company, dividing work across multiple teams with different specialties, frontend, backend, data, and fullstack.
                    This way our club members can gain similar experience to working in an actual company while improving their coding skills and creating in-depth projects for their resume.
                    We also offer group study sessions, project/homework help, etc.
                </p>
            </div>
            <div className="container about-img">
                <img src={mixedLanguages} alt="collage of programming languages" />
            </div>
        </div>
    )
}

export default About;
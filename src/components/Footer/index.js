import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
     

    return (
        <div className='page-footer'>
            <a href="https://github.com/UWTechStartUpClub" target='_blank' rel="noreferrer" className='git'>GitHub</a>
            <a href='https://github.com/UWTechStartUpClub' target='_blank' rel="noreferrer">DubNet</a>
            <h1>Tech Startup Club 2024</h1>
            <FontAwesomeIcon icon={faCopyright} color="black" className='cpSymbol'></FontAwesomeIcon> 
        </div>
    )
}

export default Footer
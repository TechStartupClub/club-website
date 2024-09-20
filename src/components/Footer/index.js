import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
     

    return (
        <div className='page-footer'>
            <a href="https://github.com/UWTechStartUpClub" target='_blank' rel="noreferrer">GitHub</a>
            <a href='' target='_blank'>DubNet</a>
            <h1>UWTechStartUpClub 2024</h1>
            <FontAwesomeIcon icon={faCopyright} color="white" className='cpSymbol'></FontAwesomeIcon> 
        </div>
    )
}

export default Footer
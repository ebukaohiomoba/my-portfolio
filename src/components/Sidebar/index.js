import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Ebuka from '../../assets/images/ebuka.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faAtom, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
<div className = 'nav-bar'>
<Link className = 'logo' to ='/'>
    <img src = {Ebuka} alt = 'logo'></img>
</Link>
<nav>
    <NavLink exact ="true" activeclassname = "active" to="/">
        <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
     </NavLink>
     <NavLink exact ="true" activeclassname = "active" className = "about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
     </NavLink>
     <NavLink exact ="true" activeclassname = "active" className = "contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
     </NavLink>
     <NavLink exact ="true" activeclassname = "active" className = "project-link" to="/resume">
        <FontAwesomeIcon icon={faAtom} color='#4d4d4e'></FontAwesomeIcon>
     </NavLink>
     <ul>
        <li>
            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/chukwuebuka-ohiomoba">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </li>
        <li>
            <a target='_blank' rel= "noreferrer" href="https://github.com/ebukaohiomoba">
            <FontAwesomeIcon icon={faGithub} />
            </a>
        </li>
     </ul> 
</nav>
</div>
)
export default Sidebar
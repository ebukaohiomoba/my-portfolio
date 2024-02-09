import { Link } from 'react-router-dom';
import Ebuka from '../../assets/images/ebuka.png';
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-area">
                <h1>Hi, <br>
                </br>I'm<br>
                </br> a <br></br></h1>
                <h2>Software Engineer</h2>
                <Link to= "/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
    );
    }


export default Home
import Ebuka from '../../assets/images/ebuka.png';
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-area">
                <h1>Hi, <br>
                </br>I'm<br>
                </br> A <br></br></h1>
                <h2>Front End Developer and Data Analyst</h2>
                <img src={Ebuka} alt='developer' />
            </div>
        </div>
    );
    }


export default Home
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return <>
    <Sidebar />
    <div className='page'>
        <span className ='tags top-tags'></span>
    </div>
    </>
}

export default Layout;
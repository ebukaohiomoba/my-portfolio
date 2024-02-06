import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return <>
    <Sidebar />
    <div className='page'>
        <span className ='tags top-tags'>BODY</span>
        <Outlet />
        <span className='tags bottom-tags'>bottom</span>
    </div>
    </>
}

export default Layout;
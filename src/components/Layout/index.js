import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import './index.scss';

const Layout = () => {
    return (
        <>
            <Sidebar />
            <div className='page'>
                <div className="container">
                    <Outlet />
                </div>
            </div> 
            <Footer />
        </>
    )
}

export default Layout
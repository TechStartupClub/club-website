import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import './index.scss';

const Layout = () => {
    return (
       <div className="App">
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>

            <Outlet />

            <span className='tags bottom-tags'>
            &lt;body&gt;
            <br /> 
            <span className='bottom-tag-html'>&lt;/html&gt;</span>   
            </span>
            <Footer />
        </div> 
       </div>
    )
}

export default Layout
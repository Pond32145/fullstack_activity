
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
    return (
        <div>
            <Header />
            <div className='mt-28'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
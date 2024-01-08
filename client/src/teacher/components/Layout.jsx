// import Footer from "./Footer"
// import Sidebar from "./Sidebar"
import Header from "./Header"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <main>
    <Header />
    <Outlet />
    </main>
  )
}

export default Layout
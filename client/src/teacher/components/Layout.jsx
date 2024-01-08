// import Footer from "./Footer"
// import Sidebar from "./Sidebar"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import Margin from "./Margin"

function Layout() {
  return (
    <main>
    <Margin />
    <Header />
    <Outlet />
    </main>
  )
}

export default Layout
// import Header from "./Header"
import { Outlet } from "react-router-dom"
import Margin from "./Margin"
import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout() {
  return (
    <main>
      <Navbar />
      <Margin />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
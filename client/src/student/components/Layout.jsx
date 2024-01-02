import Footer from "./Footer"
import Header from "./Header"
import Magin from "./Magin"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <main>
      <Magin />
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
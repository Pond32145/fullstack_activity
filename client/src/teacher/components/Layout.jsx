// import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className="mx-10 mt-10">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default Layout
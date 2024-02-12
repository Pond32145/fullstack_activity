import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './student/components/Layout.jsx'
import DashUser from './student/pages/Dashboard.jsx'
import Profile from './student/pages/Profile.jsx'
import Calendar from './student/pages/Calendar.jsx'
import History from './student/pages/History.jsx'

import LayoutT from './teacher/components/Layout.jsx'
import CalendarT from './teacher/pages/Calendar.jsx'
import ListStudent from './teacher/pages/ListStudent.jsx'
import ProfileT from './teacher/pages/Profile.jsx'
import Pro from './teacher/pages/Pro.jsx'

import Dashboard from './admin/pages/Dashboard.jsx'
import LayoutA from './admin/components/Layout.jsx'
import ListUsers from './admin/components/ListUsers.jsx'
import CalendarA from './admin/pages/Calendar.jsx'
import Activity from './admin/pages/Activity.jsx'
import Wallet from './admin/pages/Wallet.jsx'
import Add_Users from './admin/components/Add_users.jsx'
import Update_user from './admin/components/Update_user.jsx'
import Login from './pages/Login.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <LayoutA />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "calendar",
        element: <CalendarA />,
      },
      {
        path: "listusers",
        element: <ListUsers />,
      },
      {
        path: "activity",
        element: <Activity />,
      },
      {
        path: "addusers",
        element: <Add_Users />,
      },
      {
        path: "update",
        element: <Update_user />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
 
    ]
  },
  {
    path: "/activity",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <DashUser />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "/teacher",
    element: <LayoutT />,
    children: [
      {
        path: "calendar",
        element: <CalendarT />,
      },
      {
        path: "liststudent",
        element: <ListStudent />,
      },
      {
        path: "profile",
        element: <ProfileT />,
      },
      {
        path: "pro",
        element: <Pro />,
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

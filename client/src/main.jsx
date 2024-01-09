import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './student/components/Layout.jsx'
import Home from './student/pages/Home.jsx'
import Profile from './student/pages/Profile.jsx'
import Card from './student/pages/Card.jsx'
import Calendar from './student/pages/Calendar.jsx'
import History from './student/pages/History.jsx'

import LayoutT from './teacher/components/Layout.jsx'
import CalendarT from './teacher/pages/Calendar.jsx'
import ListStudent from './teacher/pages/ListStudent.jsx'
import ProfileT from './teacher/pages/Profile.jsx'
import Pro from './teacher/pages/Pro.jsx'

import Dashboard from './admin/pages/Dashboard.jsx'
import LayoutA from './admin/components/Layout.jsx'
import ListUsers from './admin/pages/ListUsers.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "listusers",
        element: <ListUsers />,
      },
    ]
  },
  {
    path: "/activity",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "card",
        element: <Card />,
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

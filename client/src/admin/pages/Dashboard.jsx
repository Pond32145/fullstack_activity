import { useEffect } from 'react'
import Dash_users from '../components/Dash_users'
import ListUsers from '../components/ListUsers'


function Dashboard() {
  useEffect(() =>{
    const token = localStorage.getItem('token')

  }, [])

 
  return (
    <div>
      <Dash_users />
      <ListUsers />
    </div>
  )
}

export default Dashboard
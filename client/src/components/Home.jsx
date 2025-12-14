import React from 'react'
import { NavbarLandingPage } from './Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <NavbarLandingPage/>
      <Outlet/>
    </div>
  )
}

export default Home

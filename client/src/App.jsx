import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import PublicRoutes from './components/PublicRoutes'

const App = () => {
  const isLogin = {
    login :true,
    role:"admin"
  }
  return (
    <>
     {isLogin.login?<ProtectedRoutes user={isLogin}/>:<PublicRoutes/>}
    </>
  )
}

export default App

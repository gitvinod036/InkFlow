import React, { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import PublicRoutes from './components/PublicRoutes'
import { ToastContainer } from "react-toastify"
import { authContext } from './context/authContext'


const App = () => {
  const checkAuth =(JSON.parse(localStorage.getItem("token"))|| {isLogin:false,user:{},token:null} )
  const [auth,setAuth]=useState(checkAuth)
  console.log(auth)
  useEffect(()=>{
    localStorage.setItem("auth",JSON.stringify(auth))
  },[auth])
  return (
    <>
    <authContext.Provider value={{auth,setAuth}}>
     {auth.isLogin?<ProtectedRoutes user={auth.user}/>:<PublicRoutes/>}
     <ToastContainer/>
     </authContext.Provider>
    </>
  )
}

export default App

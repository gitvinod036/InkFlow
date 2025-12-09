import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../author/Homepage'
import { AdminHomepage } from '../admin/AdminHomepage'
import PageNotFound from '../pages/PageNotFound'
import AuthorNavBar from '../author/navbar'
import AdminNavBar from '../admin/navbar'

export const ProtectedRoutes = ({ user }) => {
 if (user.role === "author") {
        return (
          <>
           <AuthorNavBar/>
          <Routes>
         
            <Route path='/' element={<Homepage />} />
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        </>
        );
    
}

 else if(user.role === "admin"){
    return <>
      <AdminNavBar/>
     <Routes>
        <Route path="/" element={<AdminHomepage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
     </>
  }
}
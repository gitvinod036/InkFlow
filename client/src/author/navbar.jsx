import React, { useContext } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { authContext } from '../context/authContext'


const AuthorNavBar = () => {
  const { setAuth}=useContext(authContext)
  const logout=()=>{
     setAuth({isLogin:false,user:{},token:null})
  }
  return (
    <div>
      Author Navbar
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}

export default AuthorNavBar

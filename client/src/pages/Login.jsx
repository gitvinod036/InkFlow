import React, { useContext, useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import {baseurl} from '../constants/apiurl'
import { authContext } from '../context/authContext';

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setpassword]=useState("")
  const {auth,setAuth}=useContext(authContext)

  const [loading,setLoading]=useState(false)

  const login=async()=>{
    try{
      setLoading(true)
         const res= await axios.post(`${baseurl}/api/auth/login`,{
           email:email,
           password:password
         })
         if(res.status===200){
            toast.success(res.data.message)
            setAuth((prev)=>{return {...prev,isLogin:true,user:res.data.user,token:res.data.token}})
            setLoading(false)
            
         }
    }catch(error){
        console.log(error)
        toast.error(error.response.data.message)
          setLoading(false)
    }  
  }

  return (
    <div>
     <Form >
        <div>
          <p className='h4'>Login</p>
        </div>

        <Form.Group as={Row} className="mb-3" controlId="Email">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="Email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="password">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type='password' placeholder='password' onChange={(e) => setpassword(e.target.value)} value={password} />
          </Col>
        </Form.Group>
        <Button variant='success' onClick={login} disabled={loading}>login</Button>
      </Form>
    </div>
  )
}

export default Login

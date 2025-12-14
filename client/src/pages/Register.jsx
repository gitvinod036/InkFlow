import React, { useContext, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { baseurl } from '../constants/apiurl';
import axios from "axios"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../context/authContext';



const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const navigate=useNavigate()
  // console.log(useContext(authContext))
  const {auth,setAuth}= useContext(authContext)


  const signup = () => {
    axios.post(`${baseurl}/api/auth/register/`, {
      name: name,
      password: password,
      email: email
    })
      .then(res => {if (res.status ===201){
        toast.success(res.data.message)
        // console.log(res.data) #Synchronous way of updating
        setAuth((prev)=>{return {...prev,isLogin:true,user:res.data.user ,token:res.data.token}})
        // localStorage.setItem("auth",JSON.stringify(auth))
        navigate("/")

      }else if(res.status===400){
        toast.warning(res.data.message)
      }})
      .catch(err => 
        {if (err.status===400){ 
        toast.warning(JSON.stringify(err.response.data,email))
      }else{toast.error(err.message),console.log(err)

      }
    });
  }
  return (
    <div>
      <Form >
        <div>
          <p className='h4'>signup</p>
        </div>
        <Form.Group as={Row} className="mb-3" controlId="name">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
          </Col>
        </Form.Group>

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
        <Button variant='info' onClick={signup}>Signup</Button>
      </Form>
    </div>
  )
}

export default Register

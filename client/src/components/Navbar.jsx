
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import logo from '../assets/images/profile.png'
import { NavLink, useNavigate } from 'react-router-dom';


export const NavbarLandingPage = () => {
  const navigate=useNavigate()
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " bg="danger" data-bs-theme="primary">
      <Container>
        <Navbar.Brand href="#home" onClick={()=>navigate("/")}><Image src={logo} width={"120px"} height={"100px"}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-center">
          <Nav className="me-auto">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/register"}>Signup</NavLink>
            <NavLink to={"/login"}>Login </NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}



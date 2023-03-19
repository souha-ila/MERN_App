import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>

   <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark">
    
      <Container>
      <Navbar.Brand to='/'>
            <img
              src="./images/logo.png"
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link >
            <Link style={{color:"white"}} to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link >
            <Link style={{color:"white"}} to='/About'>About</Link>
            </Nav.Link>
            <Nav.Link >
            <Link style={{color:"white"}} to='/contact'>Contact</Link>
            </Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end ">
          <Navbar.Text >
           <img
              src="./images/facebook.png"
              width="30"
              height="20"
              className="d-inline-block align-top"
              alt="React Bootstrap logo "
             
            />
              <img
              src="./images/insta.png"
              width="30"
              height="20"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
              <img
              src="./images/twiter.png "
              width="30"
              height="20"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Text>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header
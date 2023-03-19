import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from "react";
import { Link } from 'react-router-dom'
import Menu from './Menu';

const Login = () => {

  const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(email.current.value=="souhaila@gmail.com"&&password.current.value=="souhaila"){
            localStorage.setItem("emailData","souhaila@gmail.com")
            localStorage.setItem("passwordData","souhaila")
        }
        
    }
 

  return (
    getEmail &&getPassword?<Menu/>:
    <>
    
    <Container>
      <Row>
        <Col> 
        
        <img
              src="./images/imag2.jpg"
              
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Col>
        <Col>
        <div className='mt-5'>
        <Form className="mb-6" onSubmit={handleSubmit}>
      <Form.Group className="mb-5" >
        <Form.Label size="lg" className="mb-3">email</Form.Label>
        <Form.Control type="text" ref={email}  />
       
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control size="lg" type="password"  ref={password} placeholder="Password" />
        <Form.Text className="text-muted">
          We'll never share your Password with anyone else.
        </Form.Text>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
        </Col>
      </Row>
    
    </Container>
    
    </>
  )
}

export default Login
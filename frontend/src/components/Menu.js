import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom' 
const Menu = () => {

  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}
  return (
    <div>
     
     
      <Container > 
      <Row>
        <Col>
        <Placeholder size='xs' xs={12}  style={{
        marginTop: "20px",
        fontFamily: "Sans-Serif",
        color:"black"
      }}/>
      <Link to="/add"> 
        <img
              src="./images/del.jpeg"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
         </Link>   
        </Col>
        <Col>
        <h1 style={{
        marginLeft: "50px",
        fontFamily: "Sans-Serif"
      }}> Welcome Admin</h1>
      <Link to="/edit">
        <img
              src="./images/edit.jpeg"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Link>
        </Col>
            <Col>
            <Placeholder size='xs' xs={12} style={{
        marginTop: "20px",
        fontFamily: "Sans-Serif",
        color:"black"
      }} />
      <Link to="/delete">
            <img
              src="./images/delete.jpeg"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Link>
            </Col>
      </Row>
      </Container>
      <Button   onClick={handleClick} variant="outline-danger" style={{
        marginTop: "20px",
        marginLeft:"1100px",
        fontFamily: "Sans-Serif",
      }}>Logout</Button>
      
    </div>
  )
}

export default Menu
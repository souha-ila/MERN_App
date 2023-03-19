import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
const Footer = () => {
  return (

    <>

    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" > 
    <Container >
      <Row>
        <Col  xs>
          <Navbar.Text>
            <h1>Follow Us </h1>
          </Navbar.Text>
        <img
              src="./images/insta.png"
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
             <img
              src="./images/facebook.png"
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo "
             
            />
              <img
              src="./images/twiter.png"
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo "
             
            />
            
           
          </Col>
          <Col  xs>
          <Navbar.Text>
            <h1>DOWNLOAD AP</h1>
            <p> Connect with the definitive source for global and local news Us </p>
          </Navbar.Text>
       
             <img
              src="./images/play.png"
              width="200"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo "
             
            />
           
          </Col>
        <Col xs={{ order: 13 }}>
        <Navbar.Text> 
        <img
              src="./images/uemf.png"
              width="250"
              height="150"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
<p>
Route Nationale Fès Meknès, Fès 
</p>
<p>Tél : 053890-9000   </p>
</Navbar.Text>
        </Col>
        <Col xs={{ order: 4 }}>
          <Navbar.Text> 
        <h1 >Tags</h1> 
         <ul>
    <li>Fés</li>
    <li>UEMF Shop </li>
    <li>Mobilité à l'international </li>
    <li>News</li>
    <li>Sports</li>
    <li>Clubs</li>
</ul></Navbar.Text>
        </Col>
      </Row>
      
    </Container>
    </Navbar>
    
    <Navbar className="justify-content-center " collapseOnSelect expand="lg" bg="dark" variant="dark" > 
    <Navbar.Text > 
      <p>  All contents © copyright 2023 The Associated Press. All rights reserved.</p>
      </Navbar.Text>
      </Navbar>
    </>
  )
}

export default Footer
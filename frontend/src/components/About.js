import React from 'react'
import Placeholder from 'react-bootstrap/Placeholder';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const About = () => {
  return (
    <>
     <Container>
      <Row>
        <Col>
        <h1> ABOUT US</h1>
        <Placeholder size='xs' xs={5}  style={{color:"black"}} />
        </Col>
        <Col>
        
        </Col>
      </Row>
      <Placeholder size='xs' xs={12}  style={{color:"black"}} />
      <Row>
        <Col>
        <div className='mt-5'>
        <h1>UEMF NEWS</h1>
        <p>
        is a general information site of the UEMF University of Fez. Its mission is simple: to announce and explain everything that happens in the university and what will happen in the future. the site includes all the news of club activities, training, hackathons
, business and new contracts, music, culture, compus...
        </p></div>
        <img
              src="./images/logo2.png"
              
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
                  <div className='mt-5'>
       <h3>WHO</h3>
       <Placeholder size='xs' xs={5}  style={{color:"black"}} />
       <h3>IS</h3>
       <Placeholder size='xs' xs={4}  style={{color:"black"}} />
       <h3>SOUHAILA?</h3>
       <Placeholder size='xs' xs={2}  style={{color:"black"}} />

</div>
<div  className='mt-5'>
       <p>
       Hi! I'm Ounar souhaila,
        a student  in digital engineering and artificial intelligence.
        
       </p>
       <p>...and just a human</p>
       </div>
       <div  className="justify-content-end "> 
       <h1>Contact me</h1>
       <div style={{ marginTop:'20px',marginLeft:'50px' ,marginBottom:'20px'}}>
       
       <img
              src="./images/insta2.png"
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
             <img
              src="./images/facebook2.png"
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo "
             
            />
              <img
              src="./images/twiter2.png"
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo "
             
            />
            </div>
            </div>
        </Col>
   
        <Col><img
              src="./images/logo3.png"
              
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
              <img
              style={{ marginTop:'80px',marginLeft:'50px'}}
              src="./images/souhaila.png"
             
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Col>
            <Col>
            
            </Col>
     
      </Row>
      
        
    </Container>
   
    
    <Placeholder as="p" animation="wave'">
    <Placeholder size='xs' xs={11}  style={{color:"black"}} />
    </Placeholder>
    </>
  )
}

export default About
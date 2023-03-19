import News from "./News";
import {Row,Col} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Carousel from 'react-bootstrap/Carousel';
import Placeholder from 'react-bootstrap/Placeholder';
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
const NewsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/list_news')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
     <Carousel>
      <Carousel.Item interval={800}>
        <img
          className="d-block w-100"
          src="./images/3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>UEMF daily newspaper</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="./images/2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>We Report to You</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Read the World Today</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <p>  

    </p>
<Row>
  <Col>
  <Placeholder size='xs' xs={12}  style={{color:"grey"}} />
  </Col>
  <Col>
  <h2  style={{
        marginLeft: "100px",
        fontFamily: "Sans-Serif"
      }}>guess what?</h2>
  </Col>
  <Col>
  <Placeholder size='xs' xs={12}  style={{color:"grey"}} />
  </Col>
</Row>
   
    
     <div style={{
        padding: "10px",
      }}> 
     <ButtonGroup aria-label="Basic example">
   
           
      

     <Button  variant="primary" > <Link style={{
        marginLeft: "100px",
        color:'ButtonHighlight'
      }}  to='/'>All News</Link></Button>
       <Button variant="light"  > <Link variant="primary"  to='/Clubs'>Clubs</Link></Button>
       <Button variant="light" > <Link variant="primary"  to='/Compus'>U-Village</Link></Button>
       <Button variant="light" > <Link variant="primary"  to='/Education'>Education</Link></Button>
       
     </ButtonGroup>
     </div>
     <div style={{
        marginLeft: "40px",
       
      }}> 
    <Row>
    
       {[...data].reverse().map((news) => (
       <Col>
       <News n={news} />
       </Col>
       ))}
</Row>
</div>
    </>
  )
}

export default NewsList
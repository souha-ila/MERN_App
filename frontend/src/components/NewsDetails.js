import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Col,Row,Image } from 'react-bootstrap';
import axios from "axios"
import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from 'react-router-dom';

function NewsDetails(props) {
    const [News, setNews] = useState({title: '', Detail: '', img: '', category:''});
    const [error, setError] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
      axios
        .get(`http://localhost:5000/news/${id}`)
        .then((response) => {
          setNews(response.data);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    }, [id]);
  
    return (
        <>   <div>
          <Row>
<Col>
<Placeholder size='xs' xs={12}  style={{color:"green", marginTop:'50px'}} />
</Col>
<Col>
<h1 style={{color:"green",
          marginTop:'30px',
          marginLeft:'90px'
      }
      }>{News.title}</h1>
</Col>
<Col>
<Placeholder size='xs' xs={12}  style={{color:"green", marginTop:'50px'}} />
</Col>

          </Row>
      
        {error && <p>{error}</p>}
      </div>
      
      <Image style={{ marginTop:'50px',marginLeft:'350px'}}  src={'../'+News.img} alt={News.title} fluid />
    
       <p style={{ color:'grey',marginTop:'20px',marginLeft:'300px'}} >{News.category}</p>
       <p style={{ marginTop:'20px',marginLeft:'300px'}} >{News.dateofnews}</p> 
       <p style={{ marginTop:'20px',marginLeft:'300px'}} >{News.Detail}</p> 
       <Link  style={{ marginTop:'20px',marginLeft:'300px'}} >{News.website}</Link>
  
      </>
      
      
    );
  }
export default NewsDetails

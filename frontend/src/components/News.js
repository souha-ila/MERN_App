import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
const News = ({n}) => {
  return (
    <> 
   
    <div className='mt-3'> 
    
    <Card   border="dark" style={{ width: '19rem' }}>
    <Card.Img variant="top" src= {'./images/'+n.img} />
    <Card.Body>
    <Card.Text>
        
        {n.dateofnews}
      </Card.Text>
      <Card.Title>{n.title}</Card.Title>
   
      <Card.Text>
        {n.summarized}
      </Card.Text>
      <Link to={'/news/'+n._id}>View Detail</Link>

    </Card.Body>
  </Card>
  </div>
 
  </>
  )
}

export default News
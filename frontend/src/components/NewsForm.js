import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

class NewsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        summarized: '',
        Detail: '',
        dateofnews: '',
        category: '',
        website: '',
        img: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('https://uemf-news-api.onrender.com/save', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
        
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then(data => {
           console.log(data);
          this.setState({
            title: '',
            summarized: '',
            Detail: '',
            dateofnews: '',
            category: '',
            website: '',
            img: ''
           
          });
        })
        .catch(error => {
          console.error(error);
        });
  }

  render() {

  return (
    <>

    <Navbar collapseOnSelect expand="lg" bg="light"  className="justify-content-center ">
        <Navbar.Text> 
    <h2 > Add New News </h2>
    </Navbar.Text>
    </Navbar>
    
  
<Container>
      <Row>
        <Col>
        <div className='mt-5'>
        <img
              src="./images/image2.jpg"
              
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </div>
        </Col>
        <Col>
        <div style={{
        marginTop: "60px",
       
      }}>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group  >
        
        <Form.Label  >title</Form.Label>
        <Form.Control size="lg" type="text"   name="title" value={this.state.title} onChange={this.handleChange} />
      </Form.Group>

      <Form.Group >
        <Form.Label>summarized</Form.Label>
        <Form.Control size="lg" type="text"  name="summarized" value={this.state.summarized} onChange={this.handleChange} />
      </Form.Group>

      
      <Form.Group >
        <Form.Label>Detail</Form.Label>
        <Form.Control size="lg" as="textarea" rows={3} type="text" name="Detail" value={this.state.Detail} onChange={this.handleChange} />
      </Form.Group>

      <Form.Group  >
        <Form.Label>dateofnews</Form.Label>
        <Form.Control size="lg" as="textarea"  type="text" name="dateofnews" value={this.state.dateofnews} onChange={this.handleChange} />
      </Form.Group>
      <Form.Group  >
        <Form.Label>category</Form.Label>
        <Form.Control size="lg" as="textarea"  type="text" name="category" value={this.state.category} onChange={this.handleChange} />
      </Form.Group>

      <Form.Group >
        <Form.Label>website</Form.Label>
        <Form.Control size="lg" as="textarea"  type="text" name="website" value={this.state.website} onChange={this.handleChange} />
      </Form.Group>
      
      <Form.Group  className="mb-3">
        <Form.Label>image</Form.Label>
        <Form.Control  type="text" name="img" value={this.state.img} onChange={this.handleChange} />
      </Form.Group>
      
		
     



      <Button size="lg" className="mb-5" variant="primary" type="submit">
        ADD
      </Button>
    </Form>
        </div>
        
        </Col>
      </Row>

    </Container>
    
    </>
  )
}
}
export default NewsForm
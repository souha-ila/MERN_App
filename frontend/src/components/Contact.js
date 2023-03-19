import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
     Email: '',
      Message: '',
     
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:5000/message', {
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
            Name: '',
            Email: '',
            Message: '',
           
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
    <h2 > keep in touch </h2>
    </Navbar.Text>
    </Navbar>
    
  
<Container>
      <Row>
        <Col>
        <div className='mt-5'>
        <img
              src="./images/image.jpeg"
              
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </div>
        </Col>
        <Col>
        <div className='mt-5'>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-5" >
        
        <Form.Label  >Name</Form.Label>
        <Form.Control size="lg" type="text"   name="Name" value={this.state.Name} onChange={this.handleChange} />
      </Form.Group>

      <Form.Group className="mb-5" >
        <Form.Label>Email address</Form.Label>
        <Form.Control size="lg" type="text" placeholder="name@example.com"  name="Email" value={this.state.Email} onChange={this.handleChange} />
      </Form.Group>

      
      <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control size="lg" as="textarea" rows={3} type="text" name="Message" value={this.state.Message} onChange={this.handleChange} />
      </Form.Group>
      <Button size="lg" className="mb-5" variant="primary" type="submit">
        Submit
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
export default Contact
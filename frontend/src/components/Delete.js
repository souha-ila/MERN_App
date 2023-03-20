import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id:'',
        
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('https://uemf-news-api.onrender.com/supp', {
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
            id:'',

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
    <h2 >Delete News </h2>
    </Navbar.Text>
    </Navbar>
    
  
<Container>
      <Row>
        <Col>
        <div className='mt-5'>
        <img
              src="./images/image3.jpg"
              
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </div>
        </Col>
        <Col>
        <div style={{
        marginTop: "60px",
       
      }}>
        <Form  style={{
        marginTop: "150px",
       
      }} onSubmit={this.handleSubmit}>
        <Form.Group >
        <Form.Label  >id</Form.Label>
        <Form.Control size="lg" type="text"   name="id" value={this.state.id} onChange={this.handleChange} />
      </Form.Group>
 

      <Button style={{
        marginTop: "60px",
       
      }} size="lg" className="mb-5" variant="danger" type="submit">
        Delete
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
export default Delete

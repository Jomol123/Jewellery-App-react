import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from "../image/chain1.png";
import img2 from "../image/earring1.png";
import img3 from "../image/bangle.png";
import './Main1.css'

const Main1 = () => {
  return (
   <div className='card1'>
    <h1 className='cardhead'>Upcoming Collection</h1>
     <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={img1} className='image'/>
            <Card.Body>
              <Card.Title>CUSTOM PENDANT</Card.Title>
              <Card.Text>
             <p className='cardpara1'> Floating Heart</p>
             <p className='cardpara2'>(Your Choice of Gem)</p>
             <p className='cardpara3'>$350 and up</p>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={img2}  className='image'/>
            <Card.Body>
              <Card.Title>CUSTOM EARRINGS</Card.Title>
              <Card.Text>
              <p className='cardpara1'> Three-Studded</p>
             <p className='cardpara2'>(Your Choice of Stones)</p>
             <p className='cardpara3'>$500 and up</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={img3}  className='image'/>
            <Card.Body>
              <Card.Title>CUSTOM CHARM BRACELET</Card.Title>
              <Card.Text>
              <p className='cardpara1'> Beaded Bracelet in</p>
             <p className='cardpara2'>Gold/Silver</p>
             <p className='cardpara3'>$550 and up</p>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
   </div>
  );

};


export default Main1;

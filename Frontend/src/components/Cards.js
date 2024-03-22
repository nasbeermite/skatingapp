import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image5 from './images/image4.JPG'

const Cards = () => {
  return (
    <div className='mt-0'>
                  <Card>
                  <Card.Img variant="top" src={cardimg1} height={375} style={{objectFit:'cover'}} />
                  <Card.Body className='d-flex justify-content-around'>
                    <Card.Text>
                      SKATE 55
                    </Card.Text>
                    <Card.Text>
                      AED 55
                    </Card.Text>
                  </Card.Body>
                </Card>
      
    </div>
  )
}

export default Cards

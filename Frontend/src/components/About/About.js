import React from 'react'
import image1 from '../images/image1.JPG'
import image2 from '../images/image2.JPG'
import image3 from '../images/image3.JPG'
import { Card, CardBody, CardImg, Container, Row, Col, CardTitle } from "react-bootstrap";
import AboutCarousel from './AboutCarousel';
import Contact from '../Contact/Contact';


const imageUrls = [
    image1, image2, image3
]

const About = () => {
    return (
        <div>
            <div style={{ width: '100%' }}>
                <img src={image1} style={{ width: '100%', objectFit: 'cover', height: '20rem' }} alt="a skate ground" />
            </div>

            <div className='p-lg-5' style={{ marginTop: '-10%' }}>
                <Card>
                    <Card.Body>
                        <AboutCarousel />
                    </Card.Body>
                </Card>
            </div>

            <Container style={{ backgroundColor: '#E5E5E5', padding: '4%' }} className='shadow'>

                <Row className="justify-content-center text-center">
                    <h4>Events</h4>
                    {imageUrls.map((imageUrl, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} >
                            <Card style={{ maxWidth: '400px', maxHeight: '500px', padding: '2%' }}>
                                <CardImg src={imageUrl} style={{ width: '100%', height: '250px', objectFit: 'cover' }} alt='events' />
                                <CardBody>
                                    <CardTitle>Event {index + 1}</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <div className='d-flex justify-content-center'>

                <Contact />
            </div>

        </div>
    )
}

export default About

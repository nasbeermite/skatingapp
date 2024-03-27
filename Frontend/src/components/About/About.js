import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutCarousel from './AboutCarousel';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/hockey.jpg';

const imageUrls = [image1, image2, image3];

const About = () => (
    <div>
        <div style={{ width: '100%' }}>
            <img src={image4} style={{ width: '100%', objectFit: 'cover', height: '20rem' }} alt="Skate ground" loading='lazy' />
        </div>

        <div className="p-lg-5" style={{ marginTop: '-10%' }}>
            <Card>
                <Card.Body>
                    <AboutCarousel />
                </Card.Body>
            </Card>
        </div>

        <div style={{ backgroundColor: '#E5E5E5', padding: '4%' }}>
            <Row className="justify-content-center text-center">
                <h4>Events</h4>
                {imageUrls.map((imageUrl, index) => (
                    <Col key={imageUrl} xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ maxWidth: '400px', maxHeight: '500px', margin: '2%' }}>
                            <Card.Img variant="top" src={imageUrl} style={{ height: '250px', objectFit: 'cover' }} alt={`Event ${index + 1}`} loading='lazy' />
                            <Card.Body>
                                <Card.Title>Event {index + 1}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </div>
);

export default About;
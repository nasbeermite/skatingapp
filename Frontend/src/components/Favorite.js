import React from 'react';
import { Card, CardImg, CardBody, Row, Col, CardFooter } from 'react-bootstrap';
import './Favorite.css';
import img1 from './images/member2.JPG';


export default function Favorite() {
    return (


        <div className='fav-main'>

            <div className="membership-header">
                <div className="horizontal-line"></div>
                <p className="membership-text">
                    SELECT YOUR FAVORITE
                </p>
                <div className="horizontal-line"></div>
            </div>


            <Row xs={1} md={2} className="g-5">

                <Col>
                    <Card style={{ width: '90%' }}>
                        <CardImg variant="top" src={img1} alt="..." height={200} style={{ objectFit: 'cover' }} />
                        <CardBody>
                            <Row>
                                <Col xs={12} md={6}>
                                    <p>PROIN GRAVIDA NIBHVEL LOREM QUIS BIND</p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <p>Lorem quis bibendum auctor, nisi elit consequat ipsum, sec sagittis sem nibh id elit.</p>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Row>
                                <Col xs={12} md={8} >
                                    <p>Duration</p>
                                </Col>
                                <Col xs={12} md={4}>
                                    <p>AED 55</p>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>


                <Col>
                    <Card style={{ width: '90%' }}>
                        <CardImg variant="top" src={img1} alt="..." height={200} style={{ objectFit: 'cover' }} />
                        <CardBody>
                            <Row>
                                <Col xs={12} md={6}>
                                    <p>PROIN GRAVIDA NIBHVEL LOREM QUIS BIND</p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <p>Lorem quis bibendum auctor, nisi elit consequat ipsum, sec sagittis sem nibh id elit.</p>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Row>
                                <Col xs={12} md={8} >
                                    <p>Duration</p>
                                </Col>
                                <Col xs={12} md={4}>
                                    <p>AED 55</p>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

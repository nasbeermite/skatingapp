import React from 'react'
import { Card, CardImg, CardBody, Row, Col, CardFooter } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FavoriteCard = ({ image, month, price }) => {
    const navigate =useNavigate()
    return (
        <div>

            <Card >
                <CardImg variant="top" src={image} alt='No image' height={300}  style={{ objectFit: 'cover' }} />
                <CardBody>
                    <Row>
                        <Col xs={12} md={6}>
                            <p>PROIN GRAVIDA NIBHVEL LOREM QUIS BIND</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <p className='fs-6'>Lorem quis bibendum auctor, nisi elit consequat ipsum, sec sagittis sem nibh id elit.</p>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter style={{backgroundColor:'#1CA7C8',color:"white"}} onClick={()=>navigate('/details')}>
                    <Row>
                        <Col xs={12} md={8} >
                            <p>Duration :{month}</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <b>AED {price}</b>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>

        </div>
    )
}

export default FavoriteCard

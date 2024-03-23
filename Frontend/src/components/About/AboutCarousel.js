import React from 'react'
import { Carousel } from "react-bootstrap";
import image1 from '../images/men.jpg'
import { Row, Col, Image } from "react-bootstrap";



const AboutCarousel = () => {
    return (
        <div>
            <Carousel controls fade>
                <Carousel.Item className="text-center">
                    <Image
                        src={image1}
                        alt="avatar"
                        roundedCircle
                        className="shadow-1-strong mb-4"
                        style={{ width: "150px", height: "150px", objectFit: 'cover' }}
                    />
                    <Row className="justify-content-center">
                        <Col lg="8">
                            <h5 className="mb-3">Al Gate</h5>
                            <p>Founder</p>
                            <p className="text-muted">
                                {/* <FontAwesomeIcon icon={faQuoteLeft} className="pe-2" /> */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                                quibusdam illo, beatae quia fugit consequatur laudantium velit
                                magnam error. Consectetur distinctio fugit doloremque.
                            </p>
                        </Col>
                    </Row>

                </Carousel.Item>

                <Carousel.Item className="text-center">
                    <Image
                        src={image1}
                        alt="avatar"
                        roundedCircle
                        className="shadow-1-strong mb-4"
                        style={{ width: "150px", height: "150px", objectFit: 'cover' }}
                    />
                    <Row className="justify-content-center">
                        <Col lg="8">
                            <h5 className="mb-3">Al Gate</h5>
                            <p>Founder</p>
                            <p className="text-muted">
                                {/* <FontAwesomeIcon icon={faQuoteLeft} className="pe-2" /> */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                                quibusdam illo, beatae quia fugit consequatur laudantium velit
                                magnam error. Consectetur distinctio fugit doloremque.
                            </p>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default AboutCarousel

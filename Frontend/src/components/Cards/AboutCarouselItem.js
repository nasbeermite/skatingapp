import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { Carousel, Row, Col, Image } from "react-bootstrap";


const AboutCarouselItem = ({ image }) => {
    return (



        <div>
<Carousel>
            <Carousel.Item className="text-center">
                <Image
                    src={image}
                    alt="avatar"
                    roundedCircle
                    className="shadow-1-strong mb-4"
                    style={{ width: "150px" }}
                />
                <Row className="justify-content-center">
                    <Col lg="8">
                        <h5 className="mb-3">Al Gate</h5>
                        <p>Founder</p>
                        <p className="text-muted">
                            <FontAwesomeIcon icon={faQuoteLeft} className="pe-2" />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                            et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                            quibusdam illo, beatae quia fugit consequatur laudantium velit
                            magnam error. Consectetur distinctio fugit doloremque.
                        </p>
                    </Col>
                </Row>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                        <FontAwesomeIcon icon={faStar} size="sm" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar} size="sm" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar} size="sm" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar} size="sm" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={["far", "star"]} size="sm" />
                    </li>
                </ul>
            </Carousel.Item>
            </Carousel>

        </div>

    )
}

export default AboutCarouselItem
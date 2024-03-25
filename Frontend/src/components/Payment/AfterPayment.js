import React from 'react'
import image from '../images/image1.jpg'
import { Card, CardBody, Row, Col, CardTitle } from "react-bootstrap";
import './AfterPayment.css'

const AfterPayment = () => {
  return (
    <div className='after-main' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}>
      <Card className='after-card'>
        <CardTitle className="text-center pt-3">Thank you for Booking</CardTitle>
        <CardBody>
          <Row className="mb-3">
            <Col>
              <ul className="list-unstyled">
                <li className="text-black">John Doe</li>
                <li className="text-muted mt-1">
                  <span className="text-black">Invoice</span> #96382
                </li>
                <li className="text-black mt-1">March 25 2024</li>
              </ul>
            </Col>
          </Row>
          <hr />
          <Row className="mb-3">
            <Col>
              <p>Reference No</p>
            </Col>
            <Col>
              <p className="d-flex justify-content-end">30493020</p>
            </Col>
          </Row>
          <hr />
          <Row className="mb-3">
            <Col>
              <p>Date</p>
            </Col>
            <Col>
              <p className="d-flex justify-content-end">24/05/2924</p>
            </Col>
          </Row>
          <hr />
          <Row className="mb-3">
            <Col>
              <p>Session</p>
            </Col>
            <Col>
              <p className="d-flex justify-content-end">Skate 5</p>
            </Col>
          </Row>
          <hr />
          <Row className="mb-3">
            <Col>
              <p>Time</p>
            </Col>
            <Col>
              <p className="d-flex justify-content-end">12:00 AM - 1:00 PM</p>
            </Col>
          </Row>
          <hr />
          <Row className="mb-3">
            <Col>
              <p>Additional Items</p>
            </Col>
            <Col>
              <p className="d-flex justify-content-end">Penguin 2</p>
            </Col>
          </Row>
          <hr style={{ border: "2px solid black" }} />

          <Row className="text-black">
            <Col>
              <p className="fw-bold text-end">Total: $10.00</p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>


  )
}

export default AfterPayment;

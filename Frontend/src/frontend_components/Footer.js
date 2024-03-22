import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className='bg-light text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        </div>
        </section>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                {/* <FontAwesomeIcon icon={faGem} className="me-3" /> */}
                Skate Gate
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='/' className='text-reset'>
                  Ice Skate
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                Coaching
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Ice Hockey
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                Ice Dance 
                </a>
              </p>
            </Col>

       
            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                {/* <FontAwesomeIcon icon={faHome} className="me-2" /> */}
                Ajman 
              </p>
              <p>
                {/* <FontAwesomeIcon icon={faEnvelope} className="me-3" /> */}
                skategate@example.com
              </p>
              <p>
                {/* <FontAwesomeIcon icon={faPhone} className="me-3" /> + 01 234 567 88 */}
              </p>
              <p>
                {/* <FontAwesomeIcon icon={faPrint} className="me-3" /> + 01 234 567 89 */}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' >
          skategate.com
        </a>
      </div>
    </footer>
  );
}

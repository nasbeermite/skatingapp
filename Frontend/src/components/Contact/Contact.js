
import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import location from '../../images/location.png'
import mail from '../../images/mail.png'
import phone from '../../images/phone.png'


const Contact = () => {
  

  const mainStyle ={
    padding:'7%'
  }
  return (
    <section className='border text-center mb-4' style={mainStyle}>
      <h3 className='mb-5'>Contact us</h3>
      <div className='row'>
        <div className='col-lg-5'>
        <iframe
  title='Google Maps'
  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2fajman-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl'
  className='h-100 w-100'
  style={{ border: '0' }}
  loading='lazy'
></iframe>

        </div>
        <div className='col-lg-7'>
          <Form>
            <Row>
              <Col md={9}>
                <Row className='mb-4'>
                  <Col>
                    <Form.Group controlId='form3FirstName'>
                      <Form.Label>First name</Form.Label>
                      <Form.Control type='text' />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId='form3Email'>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type='email' />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId='form3Subject' className='mb-4'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='form3Textarea' className='mb-4'>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as='textarea' rows={3} />
                </Form.Group>
                <Button variant='primary' className='mb-4 w-100'>
                  Send
                </Button>
              </Col>
              <Col md={3}>
                <ul className='list-unstyled'>
                  <li>
                    <img src={location} alt='location'  height={100} width={100}/>
                    <p>
                      <small>New York, NY 10012, USA</small>
                    </p>
                  </li>
                  <li>
                  <img src={phone} alt='phone'  height={100} width={100}/>
                    <p>
                      <small>+ 01 234 567 89</small>
                    </p>
                  </li>
                  <li>
                  <img src={mail} alt='mail'   height={100} width={100}/>
                    <p>
                      <small>contact@gmail.com</small>
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact
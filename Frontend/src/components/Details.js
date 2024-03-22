import React from 'react'
import { Card, Row, Col, Container, Image } from 'react-bootstrap';
import img1 from './images/carousal1.JPG'
import './Details.css'
import { Button, InputGroup, FormControl,Form } from 'react-bootstrap';
import Cart from './Cart';


const heading="EXPERT SKATING COACHING FOR ALL LEVELS"
const subHeaading="Beginner to Advance"
const text ="Welcome young skaters! Get ready to glide into the enchanting world of ice skating. Our comprehensive classes cater to all levels, from eager beginners to seasoned advanced skaters. For our beginners, we'll focus on building a strong foundation, teaching the fundamentals of balance, posture, and those initial graceful strides. As you progress, our intermediate sessions will refine your techniques, introducing elegant turns and spins. For our advanced skaters, it's all about pushing boundaries with intricate routines, jumps, and spins that showcase your newfound mastery.!"



const Details = () => {
  return (
    <div>
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <img src={img1} alt="Example" className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className='text-align'>
            <h3>{heading}</h3>
            <h5>{subHeaading}</h5>
          <p className='text-align'>{text}</p>
        </Col>
      </Row>
    </Container>


    <Container className='mt-lg-5'>
      <h5 className='title-bg'>BOOK NOW</h5>
      <div className="booking-body">
        <form className="row g-3">
          <div className="col-md-3">
            <input
              type="date"
              id="selectDate"
              // value={selectedDate}
              // onChange={handleDateChange}
              required
            //   className="form-control"
            />
          </div>
          <div className="col-md-3">
            <select id="membership" >
              <option value="">Select Membership</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-3">
            <select id="selectSession" >
              <option value="">Select Session</option>
              <option value="session1">Session 1</option>
              <option value="session2">Session 2</option>
            </select>
          </div>
          <div className="col-md-3 ">
            <input
              type="number"
              id="numAdmits"
              // value={numAdmits}
              // onChange={handleAdmitsChange}
              min={1}
              required
            />
          </div>
          <div className="col-md-12">
            <button type="submit">CHECK NOW</button>
          </div>
        </form>
      </div>
    </Container>

      <Container>

      <div className="col-lg-3 col-md-6 col-sm-12 p-4">
            <div className="card">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp" className="card-img-top" alt="Chicago Skyscrapers" />
              <div className="card-body">
                <p className="card-title">1 YEAR MEMBERSHIP</p>
                <hr></hr>
              </div>
              <div className="card-btn mt-3" >
                <p>ADD</p>
              </div>
            </div>
          </div>
          
      <div className="col-lg-3 col-md-6 col-sm-12 p-4">
            <div className="card">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp" className="card-img-top" alt="Chicago Skyscrapers" />
              <div className="card-body">
                <p className="card-title">1 YEAR MEMBERSHIP</p>
                <hr></hr>
              </div>
              <div className="card-btn mt-3" >
                <p>ADD</p>
              </div>
            </div>
          </div>

      </Container>
<Cart/>

    </div>
  )
}

export default Details

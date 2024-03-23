import React from 'react'
import {  Row, Col, Container, Image } from 'react-bootstrap';
import img1 from './images/penguin.jpeg'
import img2 from './images/Dolphin.jpeg'
import img3 from './images/helmet.jpeg'
import img4 from './images/stick.jpg'
import img5 from './images/hockey.JPG'


import './Details.css'
import ItemCard from './Cards/ItemCard';
import Cart from './Cart';


const heading = "EXPERT SKATING COACHING FOR ALL LEVELS"
const subHeaading = "Beginner to Advance"
const text = "Welcome young skaters! Get ready to glide into the enchanting world of ice skating. Our comprehensive classes cater to all levels, from eager beginners to seasoned advanced skaters. For our beginners, we'll focus on building a strong foundation, teaching the fundamentals of balance, posture, and those initial graceful strides. As you progress, our intermediate sessions will refine your techniques, introducing elegant turns and spins. For our advanced skaters, it's all about pushing boundaries with intricate routines, jumps, and spins that showcase your newfound mastery.!"



const Details = () => {
  return (


    <div className='mt-5'>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} >
            <Image src={img5} alt="No Image" style={{objectFit:'cover',maxHeight:'100%',maxWidth:'100%'}}/>
          </Col>
          <Col xs={12} md={6} className='text-align'>
            <h3>{heading}</h3>
            <h5>{subHeaading}</h5>
            <p className='text-align'>{text}</p>
          </Col>
        </Row>
        


<div className='detail-main'>
  <h3>SKATING PRODUCTS</h3>
      <Row xs={1} md={2} lg={4} className='mt-5'>
      <Col className='mt-4'>
        <ItemCard image={img1} title="Penguin" ft="ADD" stock=" stock : 25"/>
      </Col>
      <Col className='mt-4' >
        <ItemCard image={img2} title="Dolphin" ft="ADD" stock=" stock : 15"/>
      </Col>
      <Col className='mt-4'>
        <ItemCard image={img3} title="Helmet" ft="ADD" stock="stock : Not Available" />
      </Col>
      <Col className='mt-4'>
        <ItemCard image={img4} title="1 Year Member" ft="ADD" stock=" stock : 5"/>
      </Col>
    </Row>
    </div>

      </Container>



       <Container className='mt-lg-5 card-form-bg'>
        <h5 className='title-bg'>BOOK NOW</h5>
        <div className="booking-body">
          <form className="row g-4">
            <div className="col-md-3">
              <input
                type="date"
                id="selectDate"
                required
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
            <div className="col-md-3">
              <input
                type="number"
                id="numAdmits"
                min={1}
                required
              />
            </div>
            <div className='d-flex justify-content-center'>

            <div className="col-md-2" style={{maxWidth:'200px'}}>
              <button className='form-button' type="submit">CHECK NOW</button>
            </div>
            </div>
          </form>
        </div>


      </Container> 


        <Cart/>


    </div>
  )
}

export default Details

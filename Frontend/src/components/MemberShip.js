import React from 'react'
import './MemberShip.css'
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import member1 from './images/member1.JPG'


const MemberShip = () => {

  return (
    <div className='main'>
      <div className="container">

        <div className="membership-header">
          <div className="horizontal-line"></div>
          <p className="membership-text">MEMBERSHIP
          </p>
          <div className="horizontal-line"></div>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 col-sm-12 p-4">
            <div className="card">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp" className="card-img-top" alt="Chicago Skyscrapers" />
              <div className="card-body">
                <p className="card-title">1 YEAR MEMBERSHIP</p>
                <hr></hr>
              </div>
              <div className="card-btn mt-3" >
                <p>BOOK NOW</p>
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
                <p>BOOK NOW</p>
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
                <p>BOOK NOW</p>
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
                <p>BOOK NOW</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className='mt-lg-5'>
        Discover the thrill of gliding across the smooth, glistening surface of our state-of-the-art ice rink at SKATE GATE. Nestled in the heart of Sharjah, our facility offers an exhilarating and unforgettable experience for ice skating enthusiasts of all ages and skill levels.
      </p>





    </div>
  )
}

export default MemberShip

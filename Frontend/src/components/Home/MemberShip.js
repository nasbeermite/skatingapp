import React from 'react'
import './MemberShip.css'
import { Container, Row, Col } from 'react-bootstrap';
import member1 from '../images/dance2.jpg'
import member2 from '../images/hockey.jpg'
import member3 from '../images/dance4.jpg'
import member4 from '../images/coach.jpg'



import ItemCard from '../Cards/ItemCard';


const MemberShip = () => {

  return (
    <div className='member-main' style={{backgroundColor:'white'}}>

      <div className="membership-header">
        <div className="horizontal-line"></div>
        <p className="membership-text">
          MEMBERSHIP
        </p>
        <div className="horizontal-line"></div>
      </div>
      <Container>
        <Row xs={1} md={2} lg={4} className='g-5'>
          <Col>
            <ItemCard image={member1} ft="BOOK NOW" title="1 YEAR MEMBERSHIP" />
          </Col>
          <Col>
            <ItemCard image={member2} ft="BOOK NOW" title="6 MONTHS MEMBERSHIP" />
          </Col>
          <Col>
            <ItemCard image={member3} ft="BOOK NOW" title="3 MONTHS MEMBERSHIP" />
          </Col>
          <Col>
            <ItemCard image={member4} ft="BOOK NOW" title="6 MONTHS WITH COACH" />
          </Col>
        </Row>
        <div className='mt-lg-5'>
          <p className='text-center'>Discover the thrill of gliding across the smooth, glistening surface of our state-of-the-art ice rink at SKATE GATE. Nestled in the heart of Sharjah, our facility offers an exhilarating and unforgettable experience for ice skating enthusiasts of all ages and skill levels.
          </p> </div>
      </Container>


    </div>
  )
}

export default MemberShip

import React from 'react';
import { Row, Container } from 'react-bootstrap';
import HomeCarousel from './HomeCarousel';
import BookingForm from '../BookingForm';
import image1 from '../../images/single.jpg'
import image2 from '../../images/playing.jpg'
import Favorite from './Favorite';
import SkateCard from '../Cards/SkateCard';
import MemberShip from './MemberShip';


const HomePage = () => {
  return (
    <div style={{backgroundColor:'#E5E5E5'}}>
      <div >
        <HomeCarousel />
      </div>
      <Container>
        <Row xs={1} md={3} style={{ marginTop: '-7%', padding: '5%', display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-4 mb-3" style={{ maxWidth: "360px" }}>
            <div className="card border-0 shadow-lg">
              <BookingForm />
            </div>
          </div>

          <div className="col-md-4 mb-3" style={{ maxWidth: "360px" }}>
            <div className="card border-0 shadow-lg">
              <SkateCard image={image2} skate="SKATE 65" price="AED 65" clr="#F25C05"/>
            </div>
          </div>

          <div className="col-md-4 mb-3" style={{ maxWidth: "360px" }}>
            <div className="card border-0 shadow-lg">
            <SkateCard image={image1} skate="SKATE 55" price="AED 55" clr="#D33A03"/>
            </div>
          </div>
        </Row>
      </Container>
       <Favorite/>
       <MemberShip/>
    </div>
  );
};

export default HomePage;

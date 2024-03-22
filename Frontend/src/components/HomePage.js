import React from 'react';
import Header from '../frontend_components/Header';
import { Row} from 'react-bootstrap';
import HomeCarousel from './HomeCarousel';
import BookingForm from './BookingForm';
import './HomePage.css'
import cardimg1 from './images/cardimg1.JPG'
import cardimg2 from './images/cardimg2.JPG'
import Footer from '../frontend_components/Footer';
import MemberShip from './MemberShip';

import Favorite from './Favorite';
import UserDetails from './UserDetails';

const HomePage = () => {
  return (
    <div style={{backgroundColor:'#E5E5E5'}}>
      <Header />
        <div >
          <HomeCarousel />

        <Row xs={1} md={3} style={{marginTop:'-7%' ,padding:'5%',display:'flex',justifyContent:'center'}}>
        <div className="col-md-4 mb-3" style={{maxWidth:"350px"}}>
      <div className="card border-0">      
          <BookingForm />
          </div>
    </div>


      <div className="col-md-4 mb-3" style={{maxWidth:"350px"}}>
      <div className="card border-0">
        <img src={cardimg1} className="card-img-top" alt="Card Image" height="395" style={{ objectFit: 'cover' }} />
        <div className="card-body d-flex justify-content-around align-items-center card-bg2">
          <p className="card-text text-white mb-0 card-text-color" >SKATE 55</p>
          <p className="card-text text-white mb-0 card-text-color ">5400</p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-3" style={{maxWidth:"350px"}}>
      <div className="card border-0">
        <img src={cardimg2} className="card-img-top" alt="Card Image" height="395" style={{ objectFit: 'cover' }} />
        <div className="card-body d-flex justify-content-around align-items-center card-bg1">
          <p className="card-text text-white mb-0 card-text-color">SKATE 65</p>
          <p className="card-text text-white mb-0 card-text-color">5400</p>
        </div>
      </div>
    </div>
        </Row>
      </div>
  <UserDetails/>
      <Favorite/>
      <MemberShip/>

      <Footer/>
    </div>
  );
};

export default HomePage;

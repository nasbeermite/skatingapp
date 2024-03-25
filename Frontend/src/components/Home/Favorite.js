import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Favorite.css';
import img1 from '../images/dance2.jpg';
import img2 from '../images/group1.jpg';
import img3 from '../images/group2.jpg';
import img4 from '../images/hockey.jpg';

import FavoriteCard from '../Cards/FavoriteCard';


const cardData = [
  { image: img1, month: "1 Month", price: "650" },
  { image: img2, month: "10 DAYS", price: "350" },
  { image: img3, month: "8 DAYS", price: "250" },
  { image: img4, month: "1 DAYS", price: "100" }
];

export default function Favorite() {
  return (
    <div className='fav-main'>

      <div className="favv-header">
        <div className="favv-horizontal-line"></div>
        <p className="favv-text"> FAVORITE</p>
        <div className="favv-horizontal-line"></div>
      </div>

      <Row xs={1} md={2} className="g-4">
        {cardData.map((card, index) => (
          <Col key={index}>
            <FavoriteCard image={card.image} month={card.month} price={card.price} />
          </Col>
        ))}
      </Row>


    </div>
  );
}

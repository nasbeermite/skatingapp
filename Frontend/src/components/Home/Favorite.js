import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Favorite.css';
import img1 from '../images/dance2.JPG';
import img2 from '../images/group1.JPG';
import img3 from '../images/group2.JPG';
import img4 from '../images/hockey.JPG';

import FavoriteCard from '../Cards/FavoriteCard';


export default function Favorite() {
    return (


        <div className='fav-main'>

            <div className="favv-header">
                <div className="favv-horizontal-line"></div>
                <p className="favv-text"> FAVORITE</p>
                <div className="favv-horizontal-line"></div>
            </div>

            <Row xs={1} md={2} className="g-4">
                <Col>
                    <FavoriteCard image={img1} month="1 Month" price="650" />
                </Col>
                <Col>
                    <FavoriteCard image={img2} month="10 DAYS" price="350" />
                </Col>
                <Col>
                    <FavoriteCard image={img3} month="8 DAYS" price="250" />
                </Col>
                <Col>
                    <FavoriteCard image={img4} month="1 DAYS" price="100" />
                </Col>
            </Row>

        </div>
    );
}

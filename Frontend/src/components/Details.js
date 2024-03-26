import React,{useState} from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import img1 from '../images/product1.png';
import img2 from '../images/Dolphin.jpeg';
import img3 from '../images/helmet.png';
import img4 from '../images/stick.jpg';
import imag6 from '../images/carousal1.jpg'
import Test from './Test';
import ProductCard from './Cards/ProductCard';

const Details = () => {

  const heading = "EXPERT SKATING COACHING FOR ALL LEVELS";
  const subHeading = "Beginner to Advance";
  const text = "Welcome young skaters! Get ready to glide into the enchanting world of ice skating. Our comprehensive classes cater to all levels, from eager beginners to seasoned advanced skaters. For our beginners, we'll focus on building a strong foundation, teaching the fundamentals of balance, posture, and those initial graceful strides. As you progress, our intermediate sessions will refine your techniques, introducing elegant turns and spins. For our advanced skaters, it's all about pushing boundaries with intricate routines, jumps, and spins that showcase your newfound mastery.";
  const [selectedDate, setSelectedDate] = useState('');
  const [num, setNum] = useState(1);


  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleNum = (event) => {
    setNum(event.target.value);
  };

  return (
    <div className='mt-5'>
      <Container>
        <div className='mb-5'>
          <Card className='p-2'>

            <Row className="align-items-center" style={{ borderRadius: '20px' }}>
              <Col xs={12} md={6}>
                <Card.Img 
               src={imag6} alt="Hockey" height={300} style={{ objectFit: 'cover', width: '100%' }} />
              </Col>
              <Col xs={12} md={6} className='p-2'>
                <h3>{heading}</h3>
                <h5>{subHeading}</h5>
                <p>{text}</p>
              </Col>
            </Row>
          </Card>
        </div>

        <div className='d-flex justify-content-center' style={{marginTop:'10%'}} >
          <h3>SKATE PRODUCTS</h3>
        </div>

        <div className='mt-5'>
          <Row xs={1} md={2} lg={4} className='g-4'>
            <Col className='mt-3'>
              <ProductCard image={img3} name="Helmet" />
            </Col>
            <Col className='mt-3'>
              <ProductCard image={img2} name="Seal" />
            </Col>
            <Col className='mt-3'>
              <ProductCard image={img1} name="Penguin" />
            </Col>
            <Col className='mt-3'>
              <ProductCard image={img4} name="Stick" />
            </Col>
          </Row>
        </div>

        <div>
        </div>

        <div style={{marginTop:'10%'}}>
          <h5 className='title-bg'>BOOK NOW</h5>
          <div className="booking-body">
            <form className="row g-4">
              <div className="col-md-3">
                <input
                  type="date"
                  id="selectDate"
                  value={selectedDate}
                  onChange={handleDateChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <select id="membership">
                  <option>Select Membership</option>
                  <option value="65">Skate 65</option>
                  <option value="55">Skate 55</option>
                  <option value="3">Skate with Coach</option>

                </select>
              </div>
              <div className="col-md-3">
                <select id="selectSession">
                  <option>Select Session</option>
                  <option value="session1">11:00 AM - 12:00 PM</option>
                  <option value="session2">12:30 PM - 01:30 PM</option>
                  <option value="session3">2:00 PM - 03:00 PM</option>
                  <option value="session4">03:30 PM - 04:30 PM</option>
                  <option value="session5">05:00 AM - 06:00 PM</option>

                </select>
              </div>
              <div className="col-md-3">
                <input
                  type="number"
                  id="numAdmits"
                  min={1}
                  required
                  value={num}
                  onChange={handleNum}
                />
              </div>
              <div className='d-flex justify-content-center mt-4'>
                <div className="col-md-2" style={{ maxWidth: '200px' }}>
                  <button className='form-button' type="submit">BOOK NOW</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <div className='pt-4'>
        <Test />
      </div>
    </div>
  );
};

export default Details;

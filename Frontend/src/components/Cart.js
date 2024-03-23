import React, { useState } from 'react';
import { Accordion, Card, Button, Image } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import penguin from './images/penguin.jpeg';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const navigate=useNavigate()
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(500);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        setTotalPrice(totalPrice + 62); 
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice(totalPrice - 62);
        }
    };

    const handleToggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <Container fluid>
            <div style={{ padding: '0' }} className='mt-3'>
                <Accordion activeKey={isAccordionOpen ? '0' : ''}>
                    <Card style={{ borderRadius: '30px 30px 0 0', backgroundColor: 'white' }}>
                        <Card.Header style={{ backgroundColor: 'white', borderRadius: '30px 30px 0 0' }}>
                            <Row className="align-items-center">
                                <Col>
                                    <div className="checkout-summary rounded mb-3">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h4 className="card-title mb-0">Booking Summary</h4>
                                            <i className="fas fa-info-circle text-muted" data-toggle="tooltip" data-placement="top" title="Click for details about your booking"></i>
                                            <Button onClick={()=>{navigate('/user')}}>Make Payment</Button>
                                        </div>
                                        
                                        <div className="card-footer d-flex justify-content-between align-items-center">
                                            <h5>Total: <span className="total-amount">{totalPrice} AED</span></h5>
                                            <Button variant='outline' onClick={handleToggleAccordion}>More</Button>
                                        </div>
                                    </div>


                                </Col>
                                <Col xs="auto">
                                </Col>
                            </Row>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <ul className="list-group list-group-flush booking-details">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Session: <span className="detail-value">65</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Number of Admins: <span className="detail-value">5</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Items: <span className="detail-value">Penguin</span>
                                            </li>
                                        </ul>
                                <div className="cart-item d-flex align-items-center border rounded mb-3">
                                    <Image src={penguin} alt="No image" className="rounded-circle cart-item-image" width={110} height={100} />
                                    <div className="cart-item-details flex-grow-1 d-flex justify-content-between align-items-center px-3">
                                        <div>
                                            <p className="fw-bold mb-1">Penguin</p>
                                            <p className="text-muted mb-0 ms-2">AED 62</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-sm btn-outline-secondary mx-1" onClick={()=>{handleDecrement()}}>-</button>
                                            <span className="quantity px-2">1</span>
                                            <button className="btn btn-sm btn-outline-secondary mx-1" onClick={()=>{handleIncrement()}}>+</button>
                                        </div>
                                    </div>
                                </div>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </Container>
    );
}

import React, { useState } from 'react';
import { Button, Card, Col, Container, Row ,Image} from "react-bootstrap";
import penguin from './images/penguin.jpeg';

const Cart = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <section className="h-100 h-custom">
            <div className="container py-5 h-100">
            <div className="row mb-4">
            <div className="col-md-6">
                <div className="text-align">
                <h5>Booking Information</h5>
                    <p><strong>Date:</strong> 24/05/2024</p>
                    <p><strong>Slot:</strong> 11:00 AM - 12:00 PM</p>
                    <p><strong>Session:</strong> Skate</p>
                    <p><strong>Price:</strong> 75</p>
                    <p><strong>Admints:</strong> 2</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="text-align">
                <h5>Item Information</h5>
                <div style={{display:'flex'}}>
                <Image src={penguin} height={100}/>
                    <p><strong>Name :</strong> Penguin</p>
                    <p><strong>Price:</strong> 75</p>
                    <p><strong>Quantity:</strong>2 </p>
                </div>
                </div>
            </div>
        </div>
        </div>
        </section>

    );
};

export default Cart;

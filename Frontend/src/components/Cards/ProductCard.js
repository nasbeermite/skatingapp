import React from 'react';
import './ProductCard.css'
import { Image } from 'react-bootstrap';

const ProductCard = ({ image, name }) => {
    return (
        <div className="product-card shadow b-zero">
            <div className='d-flex justify-content-center align-content-center py-2' style={{height:"10rem"}}>
                <Image src={image} alt="Product" className=' object-fit-cover'/>
            </div>
            <div className="product-content">
                <p className="text-1">
                    stock 25+
                </p>
                <div className="text-2">
                    <span>
                        {name}
                    </span>
                </div>
                <button className="product-action btn btn-danger" type="button">
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;

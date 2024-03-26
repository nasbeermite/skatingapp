import React from 'react';
import './ProductCard.css'

const ProductCard = ({ image, name }) => {
    return (
        <div className="product-card shadow">
            <div className='d-flex justify-content-center align-content-center' style={{height:"20rem"}}>
                <img src={image} alt="Product" className='mw-100 mh-100 object-fit-cover'/>
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
                <button className="product-action">
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;

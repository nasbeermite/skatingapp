import React from 'react';
import './ProductCard.css'

const ProductCard = ({ image, name }) => {
    return (
        <div className="product-card shadow">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20rem' }}>
                <img src={image} alt="Product" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
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

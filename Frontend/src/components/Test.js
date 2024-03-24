import React, { useState, useRef } from 'react';
import './Cart.css';
import penguin from './images/product1.png';
import single from './images/single.JPG';

function Test() {
  const [expanded, setExpanded] = useState(false);

  const expandedContainerRef = useRef();


  const products = [{ 'id': 1, 'name': 'Skate5', 'price': '65', 'image': single },
  { 'id': 2, 'name': ' Pengein', 'price': '60', 'image': penguin },

  ]
  const [quantities, setQuantities] = useState(products.map(() => 1));

  const handleQtyChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };



  const toggleExpand = () => {
    setExpanded(!expanded);
    setTimeout(() => {
      if (expandedContainerRef.current) {
        expandedContainerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: !expanded ? 'start' : 'end',
        });
      }
    }, 50);
  };



  return (
    <div>
      <div className={`bottom-container ${expanded ? 'expanded' : ''}`} ref={expandedContainerRef}>
        <div className="booking-details">
          <div>
            <h4>Booking Details</h4>
            <button className="btn-outline-info" onClick={toggleExpand}>
              More...
            </button>
          </div>
          <h3>Total: AED 250</h3>
        </div>
        <div className="scrollable-content">
          <div className="contentbar">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="card m-b-30">
                  <div className="card-body">
                    <div className="cart-container">
                      <div className="cart-head">
                        <div className="table-responsive">
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th scope="col">Photo</th>
                                <th scope="col">Product</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Price</th>
                                <th scope="col" className="text-right">
                                  Total
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {products.map((product, index) => (
                                <tr key={product.id}>
                                  <td>
                                    <img src={product.image} className="img-fluid" width="35" alt="product" />
                                  </td>
                                  <td>{product.name}</td>
                                  <td>
                                    <div className="form-group mb-0">
                                      <input
                                        type="number"
                                        className="form-control cart-qty"
                                        name={`cartQty${product.id}`}
                                        id={`cartQty${product.id}`}
                                        value={quantities[index]}
                                        onChange={(e) => handleQtyChange(index, parseInt(e.target.value))}
                                      />
                                    </div>
                                  </td>
                                  <td>{product.price}</td>
                                  <td className="text-right">{product.price * quantities[index]}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="cart-body">
                        <div className="row">
                          <div className="col-md-12 order-2 order-lg-1 col-lg-5 col-xl-6">
                            <div className="order-note">
                              <form>
                                <div className="form-group">
                                  <div className="input-group">
                                    <input type="search" className="form-control" placeholder="Coupon Code" aria-label="Search" aria-describedby="button-addonTags" />
                                    <div className="input-group-append">
                                      <button className="input-group-text" type="submit" id="button-addonTags">
                                        Apply
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="col-md-12 order-1 order-lg-2 col-lg-7 col-xl-6">
                            <div className="order-total table-responsive">
                              <table className="table table-borderless text-right">
                                <tbody>
                                  <tr>
                                    <td>Sub Total :</td>
                                    <td>AED 140.00</td>
                                  </tr>
                                  <tr>
                                    <td>Discount :</td>
                                    <td>5%</td>
                                  </tr>
                                  <tr>
                                    <td className="f-w-7 font-18">
                                      <h4>Amount :</h4>
                                    </td>
                                    <td className="f-w-7 font-18">
                                      <h4>AED 133.00</h4>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cart-footer text-center">
                        <button className="btn btn-outline-primary">Make Payment</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;

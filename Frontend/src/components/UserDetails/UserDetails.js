import React from 'react';
import './UserDetails.css'
import cardimg1 from '../images/carousal1.jpg'
import { useNavigate } from 'react-router-dom';


const UserDetails = () => {
    const navigate=useNavigate()
    return (

        <div className='user-main' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cardimg1})` }}>
            <div className="form-container ">
                <p className="title">Personal Details</p>
                <form className="form">
                    <input type="text" className="input" placeholder="Full Name" />
                    <input type="email" className="input" placeholder="Email" />
                    <input type="text" className="input" placeholder="Mobile Number" />
                    <textarea className="input" placeholder="Address"></textarea>
                    <button className="form-btn" onClick={()=>{navigate('/payment')}}>Submit</button>
                </form>
            </div>
        </div>


    );
}

export default UserDetails;

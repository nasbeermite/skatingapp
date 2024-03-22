import React from 'react';
import './UserDetails.css'

const UserDetails = () => {
    return (
        <div>

    <div className="form-container">
        <p className="title">Personal Details</p>
        <form className="form">
            <input type="text" className="input" placeholder="Full Name"/>
            <input type="email" className="input" placeholder="Email"/>
            <input type="text" className="input" placeholder="Mobile Number"/>
            <input type="textarea" className="input" placeholder="Address"/>
            <button className="form-btn">Submit</button>
        </form>
        </div>
    </div>


    );
}

export default UserDetails;

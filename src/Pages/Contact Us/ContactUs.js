import { faAmbulance, faHospital, faPhone, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import location from '../../images/location.jpg'

const ContactUs = () => {
    return (
        <div className="d-flex justify-content-between mb-4">
            <div className="mx-5">
                <h1 className="text-warning">Contact Us</h1>
                <h3>Our detail address is</h3>
                <p>20 Ringroad,Mohammadpur,Dhaka-1207</p>
                <img style={{ height: "200px", width: "250px", border: "1px solid red" }} src={location} alt="" />
            </div>
            <div className="mx-5">
                <h2 className="text-warning"><FontAwesomeIcon icon={faAmbulance} />Emergency Ambulance Service</h2>
                <p> <FontAwesomeIcon icon={faPhone} /> 01345678954,01678543567,01943456743 </p>
                <h2 className="text-warning"><FontAwesomeIcon icon={faHospital} />Emergency ICU </h2>
                <p> <FontAwesomeIcon icon={faPhone} /> 01345677654,01678983567,01943457643 </p>
                <h2 className="text-warning"><FontAwesomeIcon icon={faUserNurse} />Emergency Nurse Service at Home</h2>
                <p> <FontAwesomeIcon icon={faPhone} /> 01345645654,01678983767,01943857643 </p>


            </div>
        </div>
    );
};

export default ContactUs;

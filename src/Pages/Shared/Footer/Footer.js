import React from 'react';
import logo from '../../../images/logoloaded.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLandmark, faPhone } from '@fortawesome/free-solid-svg-icons';
import pic from '../../../images/footer.PNG'

const Footer = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <div className='row row-cols-1 row-cols-md-3 g-2'>
                <div className="col">
                    <div>
                        <img src={logo} alt="" />
                        <p className="text-white"><FontAwesomeIcon icon={faPhone} /> 01678877987,01786656768</p>
                        <p className="text-white"><FontAwesomeIcon icon={faEnvelope} /> info@sunshinehospital.com</p>
                        <p className="text-white ms-4"><FontAwesomeIcon icon={faLandmark} /> Ring Road,Mohammadpur,Dhaka</p>

                    </div>
                </div>
                <div className="col">
                    <div>
                        <h1 className='text-white text-center ms-3'>Our Departments</h1>
                        <ul style={{ listStyle: "none" }}>
                            <li className="text-white text-decoration-underline">Neurology Unit</li>
                            <li className="text-white text-decoration-underline">Radiology Unit</li>
                            <li className="text-white text-decoration-underline">Dental Unit</li>
                            <li className="text-white text-decoration-underline">Diagnosic Center</li>
                            <li className="text-white text-decoration-underline">Orthopedic Unit</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="me-5">
                        <h1 className="text-white">Opening Hours</h1>
                        <img style={{ height: "200px", width: "300px" }} src={pic} alt="" />

                    </div>
                </div>

            </div>
            <span className="text-white">© 2021 All Rights Reserved by Sunshine Hospital</span>
        </div>
    );
};

export default Footer;
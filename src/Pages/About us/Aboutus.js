import React from 'react';
import about from '../../images/about.PNG'

const Aboutus = () => {
    return (
        <div className="my-5">
            <h1 className="text-warning">About Us</h1>
            <img style={{ border: '1px solid yellow' }} src={about} alt="" />

        </div>
    );
};

export default Aboutus;
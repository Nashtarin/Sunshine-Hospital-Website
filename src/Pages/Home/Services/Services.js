import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Service.css'

const Services = (props) => {
    const { id, name, img, description } = props.services;
    return (
        <div className="col">
            <div className="card service h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/services/${id}`}>
                        <Button variant="warning">Details</Button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Services;
<h1>It's Services</h1>
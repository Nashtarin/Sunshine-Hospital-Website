import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useData from '../../Hooks/useServiceData';

import Data from '../../Utilities/Fakedata'
import './servicedetail.css'

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const findService = Data.find(eachService => +serviceId === eachService.id)
    console.log(findService)
    const { id, name, description, img, floor, cabins, ward, ICU } = findService;





    return (
        <div>
            <div className="servicedetail card mx-auto my-5" style={{ width: '65%' }}>
                <img style={{ height: "300px" }} src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title text-warning">{name}</h2>
                    <p className="card-text">{description}</p>
                    <span className="mb-3">Floor: {floor} floor </span>
                    <br />
                    <span className="mb-3">Floor: {floor} floor </span>
                    <br />
                    <span className="mb-3">Cabins: {cabins}  </span>
                    <br />

                    <span className="mb-3">Wards: {ward}  </span>
                    <br />
                    <span className="mb-3">ICU: {ICU} </span>
                    <br />



                </div>
                <h2 className="text-success">We guarantee, you will always feel comfort with our any kind of services </h2>
            </div>



        </div>
    );
};

export default ServiceDetail;
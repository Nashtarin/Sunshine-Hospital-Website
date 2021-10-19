import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useData from '../../Hooks/useServiceData';
import EachService from '../Home/Service/EachService';
import Data from '../../Utilities/Fakedata'

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const findService = Data.find(eachService => +serviceId === eachService.id)
    console.log(findService)





    return (
        <div>
            <h1>It's service detail:{serviceId}</h1>



        </div>
    );
};

export default ServiceDetail;
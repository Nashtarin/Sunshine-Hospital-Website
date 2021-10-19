import React from 'react';
import d1 from '../../../images/doc1.PNG'
import d2 from '../../../images/doc2.PNG'
import d3 from '../../../images/doc3.PNG'
import d4 from '../../../images/doc4.PNG'

const Doctor = () => {
    return (
        <div>
            <h1 className="text-warning">Our Specialized Doctors</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={d1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr.Fahima Akter</h5>
                            <p className="card-text">Dentist,FCPS in orthodentics from England</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={d2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr.Nurul Islam</h5>
                            <p className="card-text">Child Specialist,MBBS from DMC,FCPS in Children</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={d3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Shahidul Islam</h5>
                            <p className="card-text">Radiologist,MBBS from DMC,Radiology training from USA</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={d3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Rafia Tanaz Tisha</h5>
                                <p className="card-text">Neuro Specialist,MBBS from RMC,Masters from Kings University,FCPS in Neurology</p>
                            </div>
                        </div>
                    </div>





                    );
};

                    export default Doctor;
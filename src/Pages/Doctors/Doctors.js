import React from 'react';
import d1 from '../../images/doc1.PNG'
import d2 from '../../images/doc2.PNG'
import d3 from '../../images/doc3.PNG'
import d4 from '../../images/doc4.PNG'
import d5 from '../../images/doc5.PNG'
import d6 from '../../images/doc6.PNG'
import './doctor.css'

const Doctors = () => {
    return (
        <div className="p-5">
            <h1 className="text-warning mb-3">Our Specialized Doctors</h1>
            <div className="row row-cols-1 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card w-75 doctor h-100">
                        <img src={d1} className="card-img-top w-75" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr.Fahima Akter</h5>
                            <p className="card-text">Dentist,FCPS in Orthodentics from England</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card doctor w-75 h-100">
                        <img src={d2} className=" w-75 card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr.Nurul Alam</h5>
                            <p className="card-text">Child Specialist,MBBS from DMC,FCPS in Children Treatment.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card doctor w-75 h-100">
                        <img src={d3} className="w-75 card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Shahidul Islam</h5>
                            <p className="card-text">Radiologist,MBBS from DMC,Radiology training from USA.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card w-75 doctor h-100">
                        <img src={d5} className="card-img-top w-75" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr.Akhlak Shamim</h5>
                            <p className="card-text">Eye Specialist,MBBS from MMC,10 years of experience in eye surgery in Iran.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card w-75 doctor h-100">
                        <img src={d6} className="card-img-top w-75" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr.Shafiqur rahman Torun</h5>
                            <p className="card-text">Surgeon,MBBS from DMC,FCPS in Surgery.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card w-75 doctor h-100">
                        <img src={d4} className="card-img-top w-75" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Rafia Tanaz Tisha</h5>
                            <p className="card-text">Neuro Specialist,MBBS from RMC,Masters from Kings University,FCPS in Neurology.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctors;


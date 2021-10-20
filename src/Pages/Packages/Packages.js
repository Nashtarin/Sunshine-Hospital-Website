import React from 'react';
import s1 from '../../images/star.png'
import s2 from '../../images/star2.jpg'
import s3 from '../../images/star3.jpg'
import './Packages.css'

const Packages = () => {
    return (
        <div className="p-5">
            <h1 className="text-warning">Packages</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 my-3">
                <div className="col">
                    <div className="card star h-100">
                        <img src={s1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-warning">General Package</h5>
                            <p className="card-text">This package is affordable for almost all people and validity is for 3 months.It includes all services of hospital at 10% discount</p>
                            <h3>Price: BDT 3000</h3>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card star h-100">
                        <img src={s2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-warning">Gold Package</h5>
                            <p className="card-text">This package is for one year.It's very worthful.This package includes all services of hospital at 15% discount.</p>
                            <h3>Price: BDT 7000</h3>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card star h-100">
                        <img src={s3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-warning">Premium Package</h5>
                            <p className="card-text">This package is validated for 2 years. This includes all services of hospital at 30% discount. </p>
                            <h3>Price: BDT 10000</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Packages;
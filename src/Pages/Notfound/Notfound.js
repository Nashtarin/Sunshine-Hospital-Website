import React from 'react';
import notfound from '../../images/404.jpg'

const Notfound = () => {
    return (
        <div>
            <h1 className='text-danger'>Oops!Page Not Found!</h1>


            <img src={notfound} alt="" />
        </div>
    );
};

export default Notfound;
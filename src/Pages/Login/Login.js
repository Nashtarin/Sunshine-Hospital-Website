import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { googleSignIn, handleemail, handlepassword, togglelogin, islogin, loginProcess } = useFirebase()
    return (
        <div>
            <h1 className="text-warning">Please {islogin ? 'Sign Up' : 'Login'}</h1>

            {/* <label htmlFor="email">Email:       </label> */}
            <input onBlur={handleemail} className='mx-auto w-25 mb-2' type="email" name="email" id="email" required placeholder="Enter your email" />
            <br />
            {/* <label htmlFor="password">Password: </label> */}
            <input onBlur={handlepassword} className='mx-auto w-25 mb-2' type="password" name="password" id="password" required placeholder="Enter your password" />
            <br />
            <input onChange={togglelogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Are you new to Sunshine Hospital?{islogin && <div><h6>Please Go to <Link to='/signup'>Sign Up</Link> page</h6></div>}</label>
            <br />
            <Button onClick={loginProcess} className='mb-2' variant="warning">Login</Button>
            <br />
            <Button className="mb-2" onClick={googleSignIn} variant="warning">Google Sign in</Button>
        </div >
    );
};

export default Login;
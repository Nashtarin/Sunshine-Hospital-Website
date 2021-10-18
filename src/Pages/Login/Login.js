import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { googleSignIn } = useFirebase()
    return (
        <div>
            <h1 className="text-warning">Please Login</h1>


            <input className='mx-auto w-25 mb-2' type="email" name="email" id="email" required placeholder="Enter your email" />
            <br />
            <input className='mx-auto w-25 mb-2' type="password" name="password" id="password" required placeholder="Enter your " />
            <br />
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Are you new to Sunshine Hospital?</label>
            <br />
            <Button className='mb-2' variant="warning">Login</Button>
            <br />
            <Button onClick={googleSignIn} variant="warning">Google Sign in</Button>
        </div>
    );
};

export default Login;
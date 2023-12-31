import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            navigate('/');
        }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            console.log(auth);
            if (auth) {
                navigate('/');
            }
        }).catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png' />
        </Link>

        <div className='login_container'>
            <h1>Sign in</h1>

            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={
                    e => setEmail(e.target.value)
                } />

                <h5>Passworc</h5>
                <input type='password' value={password} onChange={
                    e => setPassword(e.target.value)
                } />

                <button 
                type='submit' 
                onClick={signIn} 
                className='login_signinBtn'>
                    Sign In
                </button>
            </form>

            <p>By signing-in you agree to Amaclone's Conditions of Use and Sale.
                 Please see our Privacy Notice,
                  our Cookies Notice and our Interest-Based Ads
            </p>

            <button 
            type='submit' 
            onClick={register} 
            className='login_registerBtn'>
                Create your Amaclone account
            </button>

        </div>
    </div>
  )
}

export default Login;
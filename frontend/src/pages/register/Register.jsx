import './register.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <div className='registerForm'>
        <label>Username</label>
        <input
          className='registerInput'
          type='text'
          placeholder='Enter your username...'
        />
        <label>Email</label>
        <input
          className='registerInput'
          type='text'
          placeholder='Enter your Email...'
        />
        <label>Password</label>
        <input
          className='registerInput'
          type='password'
          placeholder='Enter your Password'
        />
        <button className='registerButton'>Register</button>
      </div>
      <Link className='link' to='/login'>
      <button className='RLoginButton'>Login</button>
      </Link>
    </div>
  );
}

export default Register;

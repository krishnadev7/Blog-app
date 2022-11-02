import './login.css';

import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <div className='loginForm'>
        <label>Email</label>
        <input
          className='loginInput'
          type='text'
          placeholder='Enter your Email...'
        />
        <label>Password</label>
        <input
          className='loginInput'
          type='password'
          placeholder='Enter your Password'
        />
        <button className='loginButton'>Login</button>
      </div>
      <Link className='link' to='/register'>
        <button className='LregisterButton'>Register</button>
      </Link>
    </div>
  );
}

export default Login
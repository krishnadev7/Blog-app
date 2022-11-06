import './register.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login')
    } catch (err) {
      setError(true)
    }
  };

  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <div className='registerForm'>
        <label>Username</label>
        <input
          className='registerInput'
          type='text'
          placeholder='Enter your username...'
          onChange={e => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className='registerInput'
          type='text'
          placeholder='Enter your Email...'
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className='registerInput'
          type='password'
          placeholder='Enter your Password'
          onChange={e => setPassword(e.target.value)}
        />
        <button className='registerButton' onClick={handleSubmit}>
          Register
        </button>
      </div>
      <Link className='link' to='/login'>
        <button className='RLoginButton'>Login</button>
      </Link>
      {error && <span style={{color: 'red',marginTop: "10px"}}>Something went wrong! please try again</span>}
    </div>
  );
}

export default Register;

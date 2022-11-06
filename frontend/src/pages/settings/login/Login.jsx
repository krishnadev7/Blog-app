import './login.css';

import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import {UserContext} from '../../../context/Context'

function Login() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const { dispatch, loading } = useContext(UserContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch({type: 'LOGIN_START'});
    try {
      const res = await axios.post('/auth/login',{
        username,password
      })
      dispatch({type: 'LOGIN_SUCCESS',payload: res.data})
    } catch (error) {
      dispatch({type: 'LOGIN_FAILURE'})
    }
  }
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <div className='loginForm'>
        <label>Username</label>
        <input
          className='loginInput'
          type='text'
          placeholder='Enter your username...'
          onChange={(e)=>setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          className='loginInput'
          type='password'
          placeholder='Enter your Password'
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button className='loginButton' onClick={handleSubmit} disabled={loading}>Login</button>
      </div>
      <Link className='link' to='/register'>
        <button className='LregisterButton'>Register</button>
      </Link>
    </div>
  );
}

export default Login
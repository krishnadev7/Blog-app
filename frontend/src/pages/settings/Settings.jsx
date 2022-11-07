import './settings.css';

import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { useContext } from 'react';
import { UserContext } from '../../context/Context';
import { useState } from 'react';
import axios from 'axios';

function Settings() {
  const PF = 'http://localhost:5000/images/';
  const { user,dispatch } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState('');
  const [update,setUpdate] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({type: 'UPDATE_START'})
    const updatedUser = {
      userId: user._id,
      username,
      password,
      email,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;

      try {
        await axios.post('upload', data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.put(`user/${user._id}`, updatedUser);
      setUpdate(true)
      dispatch({type: 'UPDATE_SUCCESS',payload: res.data})
    } catch (error) {
      console.log(error);
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };

  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            {user && <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt='' />}
            <label htmlFor='fileInput'>
              <i className='settingsProfileIcon fa-solid fa-user'></i>
            </label>
            <input
              type='file'
              id='fileInput'
              style={{ display: 'none' }}
              onChange={e => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <label>Username</label>
          <input
            type='text'
            placeholder={user.username}
            onChange={e => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type='email'
            placeholder={user.email}
            onChange={e => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type='password'
            placeholder='password '
            onChange={e => setPassword(e.target.value)}
          />
          <button className='settingsSubmit' onClick={handleSubmit}>
            Update
          </button>
        {update && <span className='update' >Profile has been updated...</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;

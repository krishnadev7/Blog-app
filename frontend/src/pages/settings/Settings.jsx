import './settings.css'


import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

function Settings() {
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
            <img
              src='https://images.unsplash.com/photo-1667372675184-c7654c488e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
              alt=''
            />
            <label htmlFor='fileInput'>
              <i className='settingsProfileIcon fa-solid fa-user'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder='krish '/>
          <input type="email" placeholder='krish@email.com '/>
          <input type="password" placeholder='password '/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings
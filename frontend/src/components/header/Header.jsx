import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>Mern stack</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        src='https://plus.unsplash.com/premium_photo-1661558928174-a04b38beba2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'
        alt=''
        className='headerImg'
      />
    </div>
  );
}

export default Header
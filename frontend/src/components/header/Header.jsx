import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>The</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        src='https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
        alt=''
        className='headerImg'
      />
    </div>
  );
}

export default Header
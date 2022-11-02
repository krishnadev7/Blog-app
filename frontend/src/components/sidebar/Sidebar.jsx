import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>About Me</span>
        <img
          src='https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU='
          alt=''
          className='sidebarImg'
        />
        <p className='sidebarP'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Culpa sint, quaerat ipsa
          aliquam vero quisquam similique enim quidem temporibus tenetur!
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Categories</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Auto</li>
          <li className='sidebarListItem'>Movie</li>
          <li className='sidebarListItem'>Finance</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Follow us</span>
        <ul className='sidebarSocial'>
          <i
            className='sidebarIcon fa-brands fa-twitter'
            style={{ color: '#1DA1F2' }}
          ></i>
          <i
            className='sidebarIcon fa-brands fa-instagram'
            style={{ color: '#bc2a8d' }}
          ></i>
          <i
            className='sidebarIcon fa-brands fa-linkedin'
            style={{ color: '#0077b5' }}
          ></i>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

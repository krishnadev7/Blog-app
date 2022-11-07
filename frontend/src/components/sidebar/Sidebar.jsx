import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/Context';
import './sidebar.css';

function Sidebar() {
  const [categories, setCategories] = useState([]);
  const { user } = useContext(UserContext);
  const PF = 'http://localhost:5000/images/';

  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get('/category');
      setCategories(res.data);
    };
    getCategory();
  });

  return (
    <div className='sidebar'>
      {user && (
        <div className='sidebarItem'>
          <span className='sidebarTitle'>About Me</span>
          {user && (
            <img src={user.profilePic? PF + user.profilePic : PF + 'avatar.jpeg'} alt='' className='sidebarImg' />
          )}
          <p className='sidebarP'>
            Hello guys my name is {user.username}
          </p>
        </div>
      )}
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Categories</span>
        <ul className='sidebarList'>
          {categories.map((category,i) => (
            <Link to={`/?cat=${category.name}`} className='link'>
              <li className='sidebarListItem' key={i}>{category.name}</li>
            </Link>
          ))}
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

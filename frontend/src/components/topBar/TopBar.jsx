import './topBar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/Context';
import { useContext } from 'react';

function TopBar() {
  const { user, dispatch } = useContext(UserContext);
  const handleLogout = e => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <div className='top'>
      <div className='topLeft'>
        <h1>Blog</h1>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/about'>
              About
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/contact'>
              Contact
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              Write
            </Link>
          </li>
          {user && (
            <li className='topListItem' onClick={handleLogout}>
              Logout
            </li>
          )}
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <Link to='/settings'>
            <img
              className='topImg'
              src={user.profilePic}
              alt=''
            />
          </Link>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
}

export default TopBar;

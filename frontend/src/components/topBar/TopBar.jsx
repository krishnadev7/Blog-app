import './topBar.css';
function TopBar() {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i
          className='topListIcon fa-brands fa-twitter'
          style={{ color: '#1DA1F2' }}
        ></i>
        <i
          className='topListIcon fa-brands fa-instagram'
          style={{ color: '#bc2a8d' }}
        ></i>
        <i
          className='topListIcon fa-brands fa-linkedin'
          style={{ color: '#0077b5' }}
        ></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>Home</li>
          <li className='topListItem'>About</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>Write</li>
          <li className='topListItem'>Logout</li>
        </ul>
      </div>
      <div className='topRight'>
        <img
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          alt=''
          className='topImg'
        />
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  );
}

export default TopBar;

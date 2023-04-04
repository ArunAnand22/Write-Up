import React from 'react'
import './topbar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Topbar() {
  const user = false;
  return (
    <div className='top'>
        <div className="topLeft">
        <FacebookIcon className='topIcons'/>
        <TwitterIcon className='topIcons'/>
        <PinterestIcon className='topIcons'/>
        <InstagramIcon className='topIcons'/>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className='topListItem'>
                  <Link to='/' style={{textDecoration:"none",color:"inherit"}}>HOME</Link>
                </li>
                <li className='topListItem'>
                <Link to='/about' style={{textDecoration:"none",color:"inherit"}}>ABOUT</Link>
                </li>
                <li className='topListItem'>
                <Link to='/' style={{textDecoration:"none",color:"inherit"}}>CONTACT</Link>
                </li>
                <li className='topListItem'>
                <Link to='/write' style={{textDecoration:"none",color:"inherit"}}>WRITE</Link>
                </li>
                <li className='topListItem'>
                {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img className='topImg' src='https://www.clipartkey.com/mpngs/m/208-2089363_user-profile-image-png.png'/>
            ):(
            <ul className='topList'>
              <li className='topListItem'>
              <Link to='/login' style={{textDecoration:"none",color:"inherit"}}>LOGIN</Link>
              </li>
              <Link to='/register' style={{textDecoration:"none",color:"inherit"}}>REGISTER</Link>
            </ul>
            )
          }
            <SearchIcon className='topSearchIcon'/>
        </div>
    </div>
  )
}

export default Topbar
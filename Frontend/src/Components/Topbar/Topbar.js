import React from 'react'
import './topbar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';

function Topbar() {
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
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className='topImg' src='https://www.clipartkey.com/mpngs/m/208-2089363_user-profile-image-png.png'/>
            <SearchIcon className='topSearchIcon'/>
        </div>
    </div>
  )
}

export default Topbar
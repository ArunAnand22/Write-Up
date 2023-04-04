import React from 'react'
import './settings.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidebar from '../../Components/Sidebar/Sidebar'

function Settings() {
  return (
    <div className='settings'>
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form className="settingForm">
                <label>Profile picture</label>
                <div className="settingPP">
                    <img src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png"/>
                    <label htmlFor="fileInput"><AccountCircleIcon className='settingPPIcon'/></label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='username'/>
                <label>Email</label>
                <input type="email" placeholder='email'/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings
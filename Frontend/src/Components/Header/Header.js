import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img src="https://wallup.net/wp-content/uploads/2016/05/24/361241-nature-landscape-trees-river-clouds-photography-grass-sunset.jpg" className="headerImg" />
    </div>
  )
}

export default Header
import React from 'react'
import './home.css'
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Sidebar/Sidebar'

function Home() {
  return (
    <>
    <Header/>
    <div className='home'>
        <Posts/>
        <Sidebar/>
    </div>
    </>
  )
}

export default Home
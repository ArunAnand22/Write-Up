import React from 'react'
import './singlePost.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrappper">
            <img src="http://www.zastavki.com/pictures/2560x1600/2012/Food_Bread_rolls_croissants_Fast_Food_Hamburger_034633_.jpg" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem Ipsum si met
            <div className="singlePostEdit">
                <EditIcon  className='singlePostIcon'/>
                <DeleteIcon className='singlePostIcon'/>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author : <b>Arun</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Earum, ipsam cupiditate beatae veritatis excepturi blanditiis
                  nulla commodi quae enim cum ea! Rerum itaque corrupti adipisci 
                  voluptatem, quas sed! Ea, alias.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Dolores ullam cum officia sit et ab ducimus temporibus, dolorem
                  tempore! Sint tempora laboriosam saepe quas necessitatibus soluta
                   sequi, nisi earum cupiditate? Sunt quisquam architecto dolorem
                    laudantium ad expedita ratione maiores consequatur.</p>
        </div>
    </div>
  )
}

export default SinglePost
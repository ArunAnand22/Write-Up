import React from 'react'
import './post.css'

function Post() {
  return (
    <div className='post'>
        <img className='postImg' src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg'/>
    <div className='postInfo'>
        <div className='postCats'>
            <span className='postCat'>Music</span>
            <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className='postDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Minima doloribus veritatis 
        perferendis labore rem dignissimos deserunt? Labore ratione 
        dolor consequuntur!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Minima doloribus veritatis 
        perferendis labore rem dignissimos deserunt? Labore ratione 
        dolor consequuntur!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Minima doloribus veritatis 
        perferendis labore rem dignissimos deserunt? Labore ratione 
        dolor consequuntur!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Minima doloribus veritatis 
        perferendis labore rem dignissimos deserunt? Labore ratione 
        dolor consequuntur!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Minima doloribus veritatis 
        perferendis labore rem dignissimos deserunt? Labore ratione 
        dolor consequuntur!</p>
    </div>
  )
}

export default Post
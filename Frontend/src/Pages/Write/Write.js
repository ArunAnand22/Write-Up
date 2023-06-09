import React from 'react'
import './write.css'
import AddIcon from '@mui/icons-material/Add';

function Write() {
  return (
    <div className='write'>
        <img className='writeImg' src="http://wonderfulengineering.com/wp-content/uploads/2016/01/nature-wallpapers-38.jpg"/>
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput"><AddIcon className='writeIcon'/></label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write
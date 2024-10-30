import React from 'react';
import Navbar from '../Components/Navbar';

const PostJobs = () => {
  return (
    <div className='post'>
        <Navbar/>


        <form>
            <h3>Add a new job</h3>
            <input type="text" placeholder='Job title'/>
            <select name="" id="">
                <option value="">Catergory</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="Developer"> Developer</option>
            </select>

            <input type="text" placeholder='Company Name'/>
            <input type="text" placeholder='Price'/>

            <textarea name="" id="" cols="30" rows="10" placeholder='Description'></textarea>

            <button>Save</button>
        </form>

    </div>
  )
}

export default PostJobs
import React from 'react'

const ExperienceForm = () => {
  return (
    <div>
        <form>
                

                <input type="text" placeholder='Title e.g Designer - Fulltime'/>
                <input type="text" placeholder='Start date'/>
                <input type="text" placeholder='Job Location'/>
                <input type="text" placeholder='Skills'/>


                <input type="submit" value="UPDATE"  className='update'/>

            
            
            </form>
    </div>
  )
}

export default ExperienceForm
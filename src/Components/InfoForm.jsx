import React from 'react'

const InfoForm = () => {
  return (
    <div>
        <form>
                

                <input type="email"  placeholder='email'/>
                <input type="text" placeholder='location'/>
                <input type="text" placeholder='Phone Number'/>
                <input type="text" placeholder='Facebook link'/>
                <input type="text" placeholder='Twitter Link'/>
                <input type="text" placeholder='LinkedIn Link'/>

                <input type="submit" value="UPDATE"  className='update'/>

            
            
            </form>
    </div>
  )
}

export default InfoForm
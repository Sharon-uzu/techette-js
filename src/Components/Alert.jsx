import React from 'react'
import news from '../Images/vacant.png'

const Alert = () => {
  return (
    <div>
         {/* NEWSLETTER SECTION STARTS HERE  */}
        <div class="news">
            <form >
                <h3>Get Instant Alerts</h3>
                <p>Subscribe to our newsletter and get  instant job alert in your inbox</p>
                <div class="input">
                    <input type="email" placeholder="Email Address"/>
                    <button type="submit">Subscribe</button>
                </div>
                
            </form>

            <div class="news-img">
                <img src={news} alt=""/>
            </div>
        </div>


    {/* NEWSLETTER SECTION ENDS HERE  */}
    </div>
  )
}

export default Alert
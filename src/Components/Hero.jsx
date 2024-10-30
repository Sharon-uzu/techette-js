import React from 'react'
import hero from '../Images/hero-image.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
         {/* HERO-SECTION STARTS HERE  */}
        <section class="hero" id="home">
            <div class="hero-c">
                <div class="hero-txt">
                    

                    

                    <h1>Find & Hire Expert
                        Female Talents</h1>

                    <p>Work with the best female freelance talent from around
                        Port Harcourt city on our secure, flexible and cost-effective
                        platform.
                    </p>

                    <Link to="/postjobs" class="hire">Post a Job</Link>

                </div>

            

                <div class="hero-img">

                    <img src={hero} alt=""/>
                
                </div>
            </div>
        
        </section>

     {/* HERO-SECTION ENDS HERE  */}
    </div>
  )
}

export default Hero
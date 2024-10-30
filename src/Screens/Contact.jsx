import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import call from '../Images/call.png';
import mail from '../Images/mail.png';
import location from '../Images/location.png'
import fb from '../Images/fb.png';
import instagram from '../Images/instagram.png';
import twitter from '../Images/twitter.png';
import ins from '../Images/in.png'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <section class="contact-us about-us" id="contact">
        <div class="purple">
            <div class="circle">
                <h3>Contact Us</h3>
            </div>
        </div>

        <div class="contact-flex">
            <form>
                <p>Lets hear your  feedbacks, suggestions or issues on your experience with Techettes. We would love to hear you out!</p>
                <label>Name</label>
                <input type="text"/>
                <label>Email Address</label>
                <input type="email" name="" id=""/>
                <label>Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Submit" class="sub"/>
            </form>

            <div class="cont-right">
                <div class="reach">
                    <div class="reach-img">
                        <a href=""><img src={call} alt=""/></a>
                    </div>
                    <div class="reach-txt">
                        <a href=""><p>+2348153240851</p></a>
                    </div>
                </div>

                <div class="reach">
                    <div class="reach-img">
                        <a href=""><img src={mail} alt=""/></a>
                    </div>
                    <div class="reach-txt">
                        <a href=""><p>Techettes@gmail.com</p></a>
                    </div>
                </div>

                <div class="reach">
                    <div class="reach-img">
                        <a href=""><img src={location} alt=""/></a>
                    </div>
                    <div class="reach-txt">
                        <a href=""><p>24 New Heavens Crescent, off Bala, Port Harcourt</p></a>
                    </div>
                </div>

                <div class="reach">
                    <div class="reach-img">
                        <a href=""><img src={fb} alt=""/></a>
                    </div>
                    <div class="reach-txt">
                        <a href=""><p>@Techettes</p></a>
                    </div>
                </div>

                <div class="reach">
                    <div class="reach-img">
                        <a href=""><img src={instagram} alt=""/></a>
                    </div>
                    <div class="reach-txt">
                        <a href=""><p>@techettes</p></a>
                    </div>
                </div>

                <div class="reach">
                    <div class="reach-img">
                        <a href=""><img src={twitter} alt=""/></a>
                    </div>
                    <div class="reach-txt">
                        <a href=""><p>@techettes</p></a>
                    </div>
                </div>

                <div class="reach">
                    <div class="reach-img">
                        <a href=""><img src={ins} alt=""/></a>
                    </div>
                    <div class="reach-txt">
                        <a href=""><p>Techettes.ng</p></a>
                    </div>
                </div>

                
            </div>
        </div>


    </section>

        <Footer/>
    </div>
  )
}

export default Contact
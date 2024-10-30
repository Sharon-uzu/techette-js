import React from 'react';
import { FaPhone} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot} from "react-icons/fa6";
import { FaFacebook} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";





const Footer = () => {
  return (
   
    <div>
          {/* FOOTER STARTS HERE  */}
        <footer>
            <div class="foot-c">
                
                <div class="foot1">
                    <h3>Company</h3>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Contact Us</a></li>
                </div>
                <div class="foot1">
                    <h3>Contact</h3>
                    <div class="cont">
                        <div class="li-img"><a href="">
                            <FaPhone className='footer-icon1'/>
                        </a></div>
                        <div class="li-txt">
                            <li><a href="">Phone</a></li>
                            <li><a href="">+234 815 303 205</a></li>
                        </div>
                    </div>

                    <div class="cont">
                        <div class="li-img"><a href="">
                            <MdEmail className='footer-icon1'/>
                        </a></div>
                        <div class="li-txt">
                            <li><a href="">Email</a></li>
                            <li><a href="">market4hand.com</a></li>
                        </div>
                    </div>

                    <div class="cont">
                        <div class="li-img"><a href="">
                            <FaLocationDot className='footer-icon1'/>
                        </a></div>
                        <div class="li-txt">
                            <li><a href="">Address</a></li>
                            <li><a href="">25 Loyal Avenue</a></li>
                        </div>
                    </div>
                </div>
                <div class="foot1">
                    <h3>Help</h3>
                    <li><a href="">FAQs</a></li>
                    <li><a href="">Contact Us</a></li>
                </div>
                <div class="foot1">
                    <h3>Follow Us</h3>
                    <div class="socials">
                        <a href=""><FaFacebook className='social-icon'/></a>
                        <a href=""><FaTwitter className='social-icon'/></a>
                        <a href=""><FaInstagram className='social-icon'/></a>
                    </div>
                </div>
            </div>

        </footer>
        <div class="main">   
                <li> <span>&copy;</span>  Copyright 2023 Techettes. All rights reserved.</li>                
        </div>

   {/* FOOTER ENDS HERE  */}
    </div>
  )
}

export default Footer
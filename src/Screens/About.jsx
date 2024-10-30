import React from 'react';
import img1 from '../Images/ab-img.png';
import value from '../Images/value.png';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div>
        <Navbar/>
        <section class="about-us" id="about">
        <div class="about-c">
            <div class="about-l">
                <h2>About Us</h2>
                <h3>Who We Are</h3>
                <p>We are female designers, developers, content creators, digital marketers, etc. We believe that gender equality is a must in the tech ecosystem.</p>

                <p>At Techettes, we make the most enjoyable  experiences in life by providing a professional services that offers a complete range of features which best serves our customer’s needs.</p>

                <p>We’re thinking deeply not only to attune our customer’s needs and expectations but to seek how, learn and strive for personal and professional growth.</p>

                <p>We make an effort  with a passion and commitment to helping you and others to bring their vision to life. </p>
            </div>

            <div class="about-r">
                <img src={img1} alt=""/>
            </div>
        </div>
        

        <div class="purple">
            <div class="circle">
                <p>Our mission is to provide a <span>Unique</span>  way to turn your vision into <span>Reality</span>.</p>
            </div>
        </div>

        <div class="value">
            <div class="value-l">
                <img src={value} alt=""/>
            </div>
            <div class="value-r">
                <h3>Our Values</h3>
                <div class="values-p">
                    <div class="value1">
                        <h4>We are Teamwork.</h4>
                        <p>With empathy and hard work, we  seek for solutions by working together to meet the needs of our customers. </p>
                    </div>

                    <div class="value1">
                        <h4>We Empower.</h4>
                        <p>A culture of grooming female techies and putting them in the forefront of the tech space.</p>
                    </div>

                    <div class="value1">
                        <h4>Quantity.</h4>
                        <p>We ensure to provide solution and deliver premium value to our customers.</p>
                    </div>

                    <div class="value1">
                        <h4>We are Diverse.</h4>
                        <p>Attract, develop and grow female talents that reflect the full diversity, inclusion and belonging of the tech ecosystem.</p>
                    </div>
                </div>
            </div>
        </div>

    </section>

     <Footer/>
    </div>
  )
}

export default About
import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Top from '../Components/Top';
import How from '../Components/How';
import Explore from '../Components/Explore';
import Events from '../Components/Events';
import Offer from '../Components/Offer';
import Alert from '../Components/Alert';
import Testimony from '../Components/Testimony';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>

        <Navbar/>
        <Hero/>
        <Top/>
        <How/>
        <Explore/>
        <Events/>
        <Offer/>
        <Alert/>
        <Testimony/>
        <Footer/>
        
    </div>
  )
}

export default Home
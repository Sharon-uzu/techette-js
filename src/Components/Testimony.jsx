import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../Images/top1.png';
import img1 from '../Images/top2.png'
import { FaStar} from "react-icons/fa";



const Testimony = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 710 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 710, min: 0 },
      items: 1
    }
  };



  return (
    <div className='test'>

        <h2>What Our Customers Say</h2>
      
      <Carousel className='one'
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
      <div className='test-main'>
        <div className='flex-main'>
          <img src={img} alt="" />
          <div>
            <h4>Anna Rose</h4>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
        </div>

        <h5>“I was always sceptical about hiring a talent but Gender Bridge is superb”</h5>
                    
     </div>

     <div className='test-main'>
        <div className='flex-main'>
          <img src={img1} alt="" />
          <div>
            <h4>Anna Rose</h4>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
        </div>

        <h5>“I was always sceptical about hiring a talent but Gender Bridge is superb”</h5>
                    
     </div>

     <div className='test-main'>
        <div className='flex-main'>
          <img src={img} alt="" />
          <div>
            <h4>Anna Rose</h4>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
        </div>

        <h5>“I was always sceptical about hiring a talent but Gender Bridge is superb”</h5>
                    
     </div>

     <div className='test-main'>
        <div className='flex-main'>
          <img src={img1} alt="" />
          <div>
            <h4>Anna Rose</h4>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
        </div>

        <h5>“I was always sceptical about hiring a talent but Gender Bridge is superb”</h5>
                    
     </div>


     <div className='test-main'>
        <div className='flex-main'>
          <img src={img} alt="" />
          <div>
            <h4>Anna Rose</h4>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
        </div>

        <h5>“I was always sceptical about hiring a talent but Gender Bridge is superb”</h5>
                    
     </div>

     <div className='test-main'>
        <div className='flex-main'>
          <img src={img1} alt="" />
          <div>
            <h4>Anna Rose</h4>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
        </div>

        <h5>“I was always sceptical about hiring a talent but Gender Bridge is superb”</h5>
                    
     </div>


     <div className='test-main'>
        <div className='flex-main'>
          <img src={img} alt="" />
          <div>
            <h4>Anna Rose</h4>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
        </div>

        <h5>“I was always sceptical about hiring a talent but Gender Bridge is superb”</h5>
                    
     </div>
        
      </Carousel>
    </div>
  )
}

export default Testimony
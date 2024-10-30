import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import lady from '../Images/top1.png';
import { Event } from '../utils/Data';


const Events = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 710 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 710, min: 0 },
          items: 1
        }
      };
    

      
  return (
    <div className='events'>

      <Carousel className='event'
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


        {
            Event && Event.map(item =>(

                <div className=' e-l ones' style={{backgroundImage:`url(${item.bg})`}} key={item.id}>
                    <div className="dl"></div>
                    <div className='e-content'>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>

        </div>

      </div>

            ))
        }
      
                    
     
        
      </Carousel>
    </div>
  )
}

export default Events
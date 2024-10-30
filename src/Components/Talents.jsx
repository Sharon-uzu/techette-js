import React from 'react'
import { FindTalents } from '../utils/Data';
import { FaFacebook} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FaHeart} from "react-icons/fa";



const Talents = ({talents}) => {
  return (
    <div>
        {/* Freelancer */}

        {
                    talents && talents.map(item =>(
                        <div class="second">

                <div class="content">
                    <div class="content1">
                        <input type="checkbox" name="" id=""/>
                        <img src={item.img} alt=""/>
                        <div class="info">
                            <h6>{item.name}</h6>
                            <h5>{item.price}</h5>
                        </div>
                    </div>
    
                    <div class="content2">
                        <FaHeart className='hrt'/>
                    </div>
                </div>

                <div class="content-c">
                    <img src={item.workpix} alt=""/>
                    <div class="txts">
                        <h3>{item.track} <span>{item.price}</span></h3>
                        <p>{item.text}</p>
                    </div>
                </div>

                <div class="portf">
                    <a href={item.portfolio} className='portfolio'>Portfolio</a>

                    <div className="links">

                        <a href={item.fb} className="abt"><FaFacebook className='icons-social'/></a>
                        <a href={item.twitter} className="abt"><FaTwitter className='icons-social'/></a>
                        <a href={item.ins} className="abt"><FaInstagram className='icons-social'/></a>

                    </div>
                    

                </div>

            </div>


                        
                    ))
                }

            
             {/* Freelancer */}
    </div>
  )
}

export default Talents
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { TopTalents } from '../utils/Data';



const Top = () => {
  return (
    <div>
        {/* TOP TALENTS SECTION STARTS HERE  */}
        <section class="top" id="talent">
            <h2>Meet Top Talents In Our Network</h2>

            <p>Hire a female techie today and empower another tomorrow</p>

            <div class="talents">
                {
                    TopTalents && TopTalents.map(item =>(
                        <div class="talent1" key={item.id}>
                            <img src={item.img} alt=""/>
                            <h3>{item.name}</h3>
                            <p>{item.track}</p>
                            <p>{item.text}</p>

                            <div className='top-icons'>
                                <a href={item.fb}><FaFacebook/></a>
                                <a href={item.twitter}><FaTwitter/></a>
                                <a href={item.Inst}><FaInstagram/></a>
                            </div>
                        </div>
                    ))
                }
                

                
            </div>
            <div class="more">
                <a href="">See All</a>
            </div>

        </section>

    {/* TOP TALENTS SECTION ENDS HERE  */}

    </div>
  )
}

export default Top
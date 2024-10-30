import React, {useState} from 'react';
import logo from '../Images/logo-m.png'
import { Link } from 'react-router-dom';
import { TiArrowSortedDown } from "react-icons/ti";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {

    const [drop, setDrop] = useState(false)

    const handleDrop = () => {
        setDrop(!drop);
    }


    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [click, setClick] = useState(false);
    const handleClick = () => {
      setClick(!click);
      setDropdownOpen(!isDropdownOpen);
      document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling
      // document.body.classList.toggle('no-scroll', !click);
      // document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling
  
      
  
    }

    const closeMenuBar = () => {
        setClick(false);
        document.body.style.overflow = 'auto'; // Enable scrolling
    
      };


  return (
    <div>
        <header>
            <nav>
                <div className="logo">
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>


                <div className='bars' onClick={handleClick}>
                    {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
                </div>

                <ul className={click ? 'menu active' : 'menu'}>
                    <div className='first-list'>

                        <li><Link to='/find' onClick={closeMenuBar}>Find Freelancers</Link></li>
                        <li><Link to='/findjobs' onClick={closeMenuBar}>Find Jobs</Link></li>
                        <li><Link to='/about' onClick={closeMenuBar}>About</Link></li>
                        <li><Link to='/contact' onClick={closeMenuBar}>Contact Us</Link></li>

                    </div>

                    <div className='second-list'>
                        <li><Link to='/login'>Login</Link></li>
                        <li className='sign' onClick={handleDrop}><a>Sign Up <TiArrowSortedDown /> </a>
                        {
                            drop ? 
                            (<ul className='drop'>
                                
                            <li><Link to='/talentsignup'>Talent</Link></li>
                            <li><Link to='/clientsignup'>Client</Link></li>

                        </ul>) : null
                        }
                           
                        </li>

                    </div>
                </ul>
            </nav>
        </header>

        <div className={click ? 'cover' : 'cover active'}></div>

    </div>
  )
}

export default Navbar
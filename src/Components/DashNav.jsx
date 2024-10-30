import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo-m.png'

const DashNav = () => {
  return (
    <div>
        <div class="header">

            <nav  class="dash-nav nav">
                <div class="dash-logo">
                    <Link to='/'><img src={logo} alt=""/></Link>
                </div>
                <ul>
                    <li><a> Lolia Nnodim</a></li>
                    <li><Link to='/login'>Log Out</Link></li>
                </ul>
                        
                
            </nav>

        </div>

    </div>
  )
}

export default DashNav
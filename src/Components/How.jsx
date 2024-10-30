import React from 'react';
import { FaUser} from "react-icons/fa";
import { FaUpload} from "react-icons/fa";
import { FaSearch} from "react-icons/fa";
import { FaMarker} from "react-icons/fa";



const How = () => {
  return (
    <div>
        {/* HOW IT WORKS SECTION STARTS HERE  */}

        <section class="how">
            <div>

        
                <h2>How It Works</h2>

                <h5>Hire a female techie today and empower another tomorrow</h5>
                


                <div class="steps">

                    <a><div class="step1">
                        <div>
                            <FaUser className='icon'/>
                        </div>
                        
                        <h4>Create Account</h4>
                        <p>First you have to create an account as a user</p>
                    </div></a>

                    <a><div class="step1">
                        <div>
                            <FaUpload className='icon'/>
                        </div>
                        <h4>CV/Resume</h4>
                        <p>Upload your cv/ best jobs.</p>
                    </div></a>

                    <a><div class="step1">
                        <div>
                            <FaSearch className='icon'/>
                        </div>
                        <h4>Search Job</h4>
                        <p>Find available jobs/ talents using search or categories.</p>
                    </div></a>

                    <a><div class="step1">
                        <div>
                            <FaMarker className='icon'/>
                        </div>
                        <h4>Apply/Hire</h4>
                        <p>Apply for jobs / hire tech talents.</p>
                    </div></a>


                </div>
                </div>
        </section>

 {/* HOW IT WORKS SECTION ENDS HERE  */}

    </div>
  )
}

export default How
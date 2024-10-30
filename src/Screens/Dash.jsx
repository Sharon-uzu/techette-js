import React, {useState} from 'react';
import DashNav from '../Components/DashNav';
import profile from '../Images/top1.png';
import edit from '../Images/edit1.png'
import pencil from '../Images/jam_pencil.png';
import fb from '../Images/fb-d.png';
import twitter from '../Images/twit-d.png';
import instagram from '../Images/in-d.png';
import mail from '../Images/mail-d.png';
import loc from '../Images/loc-d.png';
import call from '../Images/call-d.png';
import Modal from "react-modal";
import InfoForm from '../Components/InfoForm';
import AboutForm from '../Components/AboutForm';
import LanguageForm from '../Components/LanguageForm';
import ExperienceForm from '../Components/ExperienceForm';
import Imageform from '../Components/Imageform';



const Dash = () => {


    {/* MODAL FOR PERSONAL INFORMATION AND SOCIAL PROFILE STARTS HERE */}


    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };


    {/* MODAL FOR ABOUT ME STARTS HERE*/}

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const toggleModal1 = () => {
      setIsModalOpen1(!isModalOpen1);
    };

    {/* MODAL FOR LANGUAGE STARTS HERE*/}

    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const toggleModal2 = () => {
      setIsModalOpen2(!isModalOpen2);
    };

    {/* MODAL FOR EXPERIENCE STARTS HERE*/}

    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const toggleModal3 = () => {
      setIsModalOpen3(!isModalOpen3);
    };


    {/* MODAL FOR IMAGE STARTS HERE*/}

    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const toggleModal4 = () => {
      setIsModalOpen4(!isModalOpen4);
    };


  return (
    <div>
        <DashNav/>
        <div class="dash1">
            <div class="dash-p"></div>
            <div class="dash-flex1">
                <div class="flex-img">
                    <img src={profile} alt="" className='profiles'/>
                    <img src={edit} alt="" class="edit1" onClick={() => setIsModalOpen4(true)} style={{cursor:'pointer'}}/>
                </div>
                <div class="flex-txt">
                    <h3>Lolia Nnodim</h3>
                    <p>Product Designer</p>
                </div>
            </div>

            <div class="profile">
                <div class="profile-l">
                    <div class="profile1">
                        <div class="edit2">
                            <h3>Personal Information</h3>
                            <img src={pencil} alt="" onClick={() => setIsModalOpen(true)} style={{cursor:'pointer'}}/>
                        </div>
                        <div class="soc">
                            <a href="" ><img src={mail} alt=""/></a>
                            <div class="a"><a href=""><p>loliannodim8@gmail.com</p></a></div>
                            
                        </div>
                        <div class="soc">
                            <a href=""><img src={loc} alt=""/></a>
                            <div class="a">
                                <a href=""><p>Port Harcourt, Nigeria</p></a>
                            </div>
                            
                        </div>
                        <div class="soc">
                            <a href=""><img src={call} alt=""/></a>

                            <div class="a">
                                <a href=""><p>+2348162581054</p></a>

                            </div>
                        </div>
                        
                            <h3 class="prof">Social Profiles</h3>

                        <div class="accounts">
                            <div class="acct-imgs">
                            <a href=""><img src={fb} alt=""/></a>
                                <a href=""><img src={twitter} alt=""/></a>
                                <a href=""><img src={instagram} alt=""/></a>
                            </div>
                        </div>
                        
                    </div>

                    <div class="profile1 lang">
                        <div class="edit2">
                            <h3>Languages</h3>
                            <img src={pencil} alt="" onClick={() => setIsModalOpen2(true)} style={{cursor:'pointer'}}/>
                        </div>
                        <p>English</p>
                        <p>French</p>
                    </div>
                </div>
                <div class="profile-r">
                    <div class="profile1">
                        <div class="edit2">
                            <h3>About me</h3>
                            <img src={pencil} alt="" onClick={() => setIsModalOpen1(true)} style={{cursor:'pointer'}}/>
                        </div>

                        <p class="user">I am a Product designer (UI/UX Designer) with a passion for problem-solving and creating
                            user-friendly experiences. I have expertise in UI/UX design, visual design, and user research.</p>
                    </div>

                    <div class="profile1">
                        <div class="edit2">
                            <h3>Experience</h3>
                            <img src={pencil} alt="" onClick={() => setIsModalOpen3(true)} style={{cursor:'pointer'}}/>
                        </div>

                        <div class="exp">
                            <p><b>Product Design Intern</b></p>
                            <p>Harvoxx Tech Hub · Internship</p>
                            <p>Feb 2023 - Present · 3 mos</p>
                            <p>Rivers State, Nigeria · On-site</p>
                        </div>
                        <div class="exp">
                            <p><b>Skills:</b> User Experience Design (UED) · Prototyping · Visual Design · Wireframing ·
                                User Experience (UX) · User Interface Design</p>

                        </div>
                        
                        
                    </div>

                </div>
            </div>
        </div>


        {/* MODAL FOR PERSONAL INFORMATION AND SOCIAL PROFILE STARTS HERE */}

        <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              
                <div className="form">

                <div className='close'>
                  <button onClick={() => setIsModalOpen(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <InfoForm/>

                </div>
                

              </div>

            
            
          </Modal>


        {/* MODAL FOR PERSONAL INFORMATION AND SOCIAL PROFILE ENDS HERE*/}


        {/* MODAL FOR ABOUT ME STARTS HERE*/}

        <Modal
            isOpen={isModalOpen1}
            onRequestClose={toggleModal1}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              
                <div className="form">

                <div className='close'>
                  <button onClick={() => setIsModalOpen1(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <AboutForm/>

                </div>
                

              </div>

            
            
          </Modal>


        {/* MODAL FOR ABOUT ME ENDS HERE*/}



        {/* MODAL FOR LANGUAGE STARTS HERE*/}


        <Modal
            isOpen={isModalOpen2}
            onRequestClose={toggleModal2}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              
                <div className="form">

                <div className='close'>
                  <button onClick={() => setIsModalOpen2(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <LanguageForm/>

                </div>
                

              </div>

            
            
          </Modal>


        {/* MODAL FOR LANGUAGE ENDS HERE*/}



    {/* MODAL FOR EXPERIENCE STARTS HERE*/}


        <Modal
            isOpen={isModalOpen3}
            onRequestClose={toggleModal3}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              
                <div className="form">

                <div className='close'>
                  <button onClick={() => setIsModalOpen3(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <ExperienceForm/>

                </div>
                

              </div>

            
            
          </Modal>


    {/* MODAL FOR EXPERIENCE ENDS HERE*/}


    {/* MODAL FOR IMAGE STARTS HERE*/}


    <Modal
            isOpen={isModalOpen4}
            onRequestClose={toggleModal4}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              
                <div className="form">

                <div className='close'>
                  <button onClick={() => setIsModalOpen4(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <Imageform/>

                </div>
                

              </div>

            
            
          </Modal>


        {/* MODAL FOR IMAGE ENDS HERE*/}



    </div>
  )
}

export default Dash
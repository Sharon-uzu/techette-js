import React, {useState, useEffect} from 'react';
import pix from '../Images/get1.png';
import pix1 from '../Images/google-c.png';
import pix2 from '../Images/in-c.png';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Supabase } from '../config/supabase-config';


const ClientSignUp = () => {

    const navigate = useNavigate();

    const saveItem = () => {
        navigate('/login')
      }


    // form

    const initialValues = {
        name: '',
        email: '',
        password: '',
      };
    
      const [formData, setFormData] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isLoading, setIsLoading] = useState(true);
        const [isSubmit, setIsSubmit] = useState(false);



      const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formData));
        setIsSubmit(true);

      };
    
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formData);
        }
      }, [formErrors]);


      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      
        
        if (!values.name) {
          errors.name = "Name is required";
        } else if (!values.email) {
          errors.email = "Email is required";
        }else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email";
          } else if (!values.password) {
          errors.password= "Password is required";
    
        }else{
          Supabase.from("techette")
            .upsert([
              {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                
              },
            ])
            .then((response) => {
              console.log(response);
              saveItem()
            });
              }
        return errors;
      };
    
      


  return (
    <div>
        <Navbar/>
        <section class="login">

        <div class="welcome">
            <img src={pix} alt=""/>
        </div>
        
        <div class="form">
            <div className='form-c'>
                <h2 class="get">Get Started</h2>
               
                <input type="text" name="" id="" placeholder="Full Name / Company Name" class="inp" value={formData.name} 
                onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }} />
              <p style={{ color: "red", fontSize: "14px" }}>{formErrors.name}</p>

                
                <input type="email" name="" id="" class="inp" placeholder="Email Address" value={formData.email} 
                 onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}/>
                <p style={{ color: "red", fontSize: "14px" }}>{formErrors.email}</p>


                <div class="eye">
                    <input type="password" name="" id="" placeholder="Password" value={formData.password} 
                 onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  });
                }}/>
                    <img src="../assets/images/eye1.png" alt=""/>
                </div>
                <p style={{ color: "red", fontSize: "14px" }}>{formErrors.password}</p>

                
                <h4 style={{paddingBottom: "25px", textAlign: "start"}}>By submitting, you acknowledge that you have read and agreed to our <span><a href="">Terms and Conditions</a></span> and <span><a href="">Privacy Policy.</a> </span></h4>
                
                <input type="submit" value="Sign Up" class="submit" onClick={handleSubmit}/>
                <h3 class="or">OR</h3>
                <div class="social">
                    <a href=""><img src={pix1} alt=""/></a>
                    <a href=""><img src={pix2} alt=""/></a>
                    <a href=""><img src={pix2} alt=""/></a>
                </div>

                <h4>Already have an account? <span><Link to='/login'>Login</Link></span> </h4>

            </div>
        </div>


         {
            isLoading ? (
                <>
                <div></div>
                </>
            ): null
         }       

        

    </section>
    </div>
  )
}

export default ClientSignUp
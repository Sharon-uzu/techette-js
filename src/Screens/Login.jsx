import React,{useState} from 'react';
import pix from '../Images/welcome.png'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Supabase } from "../config/supabase-config";



const Login = ({onLogin}) => {

    const navigate = useNavigate();

    const saveItem = () => {
        navigate('/dashboard')
      }

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Check if the user exists in the Supabase "users" table
      const { data: users, error } = await Supabase
        .from('techette')
        .select('*')
        .eq('email', email);

      if (error) {
        console.error('Error checking user existence:', error.message);
        console.log('Error checking user existence:', error.message);

      } else if (users.length === 0) {
        console.error('User not found.');
        console.log('User not found.');

      } else {
        // User exists, proceed with login
        const { user, error } = await Supabase.auth.signIn({
          email,
          password,
        });

        if (error) {
          console.error('Error during login:', error.message);
          console.log('Error during login:', error.message);

        } else {
          console.log('User logged in:', user);
          onLogin(); // Notify the parent component about successful login
          saveItem()

        }
      }
    } catch (error) {
      console.error('Unexpected error during login:', error.message);
      console.log('Unexpected error during login:', error.message);

    }
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
            
                <h2>Welcome Back</h2>
                <p>Please enter your details below</p>
                <label>Email Address</label>
                <input type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="inp"/>

                <label>Password</label>
                <div class="eye">
                    <input type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <img src="../assets/images/eye1.png" alt=""/>
                </div>

                <div class="password">
                    <div class="rem">
                        <input type="checkbox" name="" id=""/> 
                        <span>Remember me</span>
                    </div>

                    <div class="forgot">
                        <a href="">Forgot Password?</a>
                    </div>

                </div>
                
                <input type="submit" value="Login" class="submit" onClick={handleLogin}/>
                <h4>Don’t have an account?  Sign Up as <span><Link to='/talentsignup'>Talent</Link></span> or <span><Link to='/clientsignup'>Client</Link> </span></h4>

            </div>

        </div>


        
    </section>
    </div>
  )
}

export default Login
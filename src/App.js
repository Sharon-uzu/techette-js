import './App.css';
import Home from './Screens/Home';
import { Route, Routes } from 'react-router-dom';
import ClientSignUp from './Screens/ClientSignUp';
import TalentSignUp from './Screens/TalentSignUp';
import Login from './Screens/Login';
import FindFreelancers from './Screens/FindFreelancers';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Dash from './Screens/Dash';
import FindJob from './Screens/FindJob';
import PostJobs from './Screens/PostJobs';

function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/clientsignup' element={<ClientSignUp/>} />
        <Route path='/talentsignup' element={<TalentSignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/find' element={<FindFreelancers/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/dashboard' element={<Dash/>} />
        <Route path='/findjobs' element={<FindJob/>} />
        <Route path='/postjobs' element={<PostJobs/>} />



      </Routes>
      
    </div>
  );
}

export default App;

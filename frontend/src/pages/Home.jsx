import React from 'react'
import './Home.css'
import { LuShield } from "react-icons/lu";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    function handlesign(){
        navigate('/login');
    }
    

  return (
    <div className='main-home'>
        <div className='home-nav'>
            <nav>
                <section className='home-title'>
                    <ul>
                        <li className='shield-icon'><LuShield /></li>
                        <li><h2>Online Civic Complaint</h2></li>
                    </ul>

                    
                </section>
                <section className='home-log-btn'>
                  <button onClick={handlesign} className='home-sign'>Sign In</button>
                   <Link to='/register'> <button className='home-regist'>Get Started</button></Link>
                </section>
            </nav>
            <div className='home-body1'>
                <div className='home-body-text'>
                    <h1>Better Cities Start </h1>
                     <h1>With Better </h1>
                    <h1> Service.</h1>
                    <p>Empowering citizens to report issues, track resolutions, and <br /> build a more responsive municipality using AI-driven routing <br /> and real-time GPS tracking.</p>
                    </div>
                    <div className='home-button'>
                   <Link to='/register'> <button className='home-btn1'>Register Now</button></Link>
                    <Link to='/login'><button className='home-btn2'>Officer Login</button></Link>
                
                </div>
                 
                
            </div>
            <footer>
                  <div className='footer-container'>
                     <div className='content-1'>
                        <div className='home-title2'>
                      <ul>
                          <li className='shield-icon'><LuShield /></li>
                         <li><h2>Online Civic Complaint</h2></li>
                      </ul>
                      <p>Transforming municipal governance <br />
                         through digital excellence. Empowering <br/>
                         citizens to build a smarter, more<br/>
                         responsive city together.
                       </p>
                     </div>
                 </div>

                </div>
                     </footer>
                
        </div>
       
    </div>
  )
}

export default Home
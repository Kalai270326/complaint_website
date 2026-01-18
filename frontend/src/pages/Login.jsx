import React from 'react'
import './Login.css'
import { LuShieldCheck } from 'react-icons/lu'
import { FiUserPlus } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

 
function Login() {

const navigate = useNavigate();
 
  const handleLogin=()=>{
    navigate('/register');

  }
  return (
    <div className='main-login'>
        <div className='main-title'>
            <div className='login-title'>
                <i><LuShieldCheck /></i>
                <h2>MuniSolve</h2>
                <h4>Staff Dispatch & Citizen Hub</h4>
            </div>
            <div className='login-form-container'>
                <form className='login-form'>
                
                <section>
                  <label htmlFor="email">Email/Staff id</label>
                <input type="text" id="email" placeholder='Enter your email or staff id' />
                </section>
                <section>
                  <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                </section>
                <button className='btn'>Sign In</button>
               <h5>NEW USER?</h5> 
                <button  onClick={handleLogin} className='btn-2'><FiUserPlus />Register as Citizen</button>
                </form>
                

            </div>
           
        </div>

    </div>
  )
}

export default Login
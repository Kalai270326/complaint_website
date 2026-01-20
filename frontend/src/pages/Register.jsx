import React from 'react'
import '../pages/Register.css'
import { FiUserPlus } from 'react-icons/fi'

function Register() {
  return (
    <div className='main-reg'>
      
         
                    
                    <div className='reg-form-container'>
                        <form className='reg-form'>
                          <div className='reg-title'>
                        
                        <h2>Create Account</h2>
                        <h4>join the digital municipal network</h4>
                    </div>
                        <section>
                          <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder='Enter your full name' />
                        </section>
                    
                        
                        <section>
                          <label htmlFor="email">Email/Staff id</label>
                        <input type="text" id="email" placeholder='Enter your email or staff id' />
                        </section>
                        <section>
                          <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                        </section>
                       
                        <button  className='btn-regnow'><FiUserPlus />Register Now</button>
                        </form>
                        
        
                    </div>
                   
                
         

    </div>
  )
  
}

export default Register
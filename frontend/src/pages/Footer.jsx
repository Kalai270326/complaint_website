import React from 'react'
import './Footer.css'
import { LuShield } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div> 
      <footer>
                     <div className='footer-container'>
                         <div className='content-1'>
                        <div className='home-title2'>
                          <div className='footer-title'>
                          <ul className=''>
                              <li className='shield-icon'><LuShield /></li>
                             <li><h2>MuniSolve</h2></li>
                          </ul>
                          <p>Transforming municipal governance <br />
                             through digital excellence. Empowering <br/>
                             citizens to build a smarter, more<br/>
                             responsive city together.
                           </p>
                           </div>
                           <div className='social-media-icons'>
                              <a href="#"><TbBrandFacebook /></a>
                              <a href="#"><CiTwitter /></a>
                              <a href="#"><FaInstagram /></a>
                           </div>
                          
                        </div>
                        <div className='content-2'>
                          <h3>MUNICIPAL SERVICES</h3>
                          <ul>
                            <li>Property Tax</li>
                            <li>Trade License</li>
                            <li>Birth/Death Reg</li>
                            <li>City Planning</li>
                          </ul>
                        </div>
                         <div className='content-3'>
            <h3>CITIZEN SUPPORT</h3>
            <ul className="">
              <li className="">
               <span className='call-icon'> <  IoCallOutline /></span>
                <div>
                  <p className="para-1">Emergency Hotline</p>
                  <p className="para-2">1-800-MUNI-HELP</p>
                </div>
              </li>
              <li className="">
              <span className='email-icon'> <MdOutlineEmail /></span>
                <div>
                  <p className="para-1">Email Support</p>
                  <p className="para-2">helpdesk@muni.gov</p>
                </div>
              </li>
            </ul>
          </div>
                     </div>
    
                    </div>
       </footer>
       
    </div>
  )
}

export default Footer
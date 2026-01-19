import React from 'react'
import './Complaintfile.css';

function Complaintfile() {
  return (
    <div className='main-complaint'>
        <div className='complaint-title'>
            <h2>File a New Complaint</h2>
            <h5>Provide details about the issue to help us resolve it quickly.</h5>

        </div>
        <div className='complaint-form'>
            <form action="">
                <label htmlFor="">issue Description</label>
                <textarea name="" id=""/>
            </form>
        </div>
    </div>
  )
}

export default Complaintfile
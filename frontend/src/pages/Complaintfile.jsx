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
                <div className='issue_description'>
                <label htmlFor="issue_description">issue Description</label>
                <textarea name="" id="issue_description" value=""/>
                </div>
                <div className='comp_category' >
                    <label htmlFor="comp_category">Category</label>
                    <select name="" id="">
                        <option value="">Street Light</option>
                        <option value="">Water Leak</option>
                        <option value="">Drainage</option>
                        <option value="">Road Damage</option>
                        <option value="">Sanitation</option>
                        <option value="">Other</option>
                    </select>
                </div>
                <div className='comp_loc'>
                    <label htmlFor="">Locaion</label>
                    <button ></button>


                </div>
            </form>
        </div>
    </div>
  )
}

export default Complaintfile
import React from 'react'
import "./newUser.css"
const NewUser = () => {
  return (
    <div className='newuser'>
        <h3 className='newuser-title'>New User</h3>
        <form className='newuser-form'>
            <div className="newuser-input-container">
                <label>Username</label>
                <input placeholder='john' type="text" />
            </div>
            <div className="newuser-input-container">
                <label>Full Name</label>
                <input placeholder='John Smith' type="text" />
            </div>
            <div className="newuser-input-container">
                <label>Email</label>
                <input placeholder='john@gmail.com' type="text" />
            </div>
            <div className="newuser-input-container">
                <label>Password</label>
                <input placeholder='password' type="text" />
            </div>
            <div className="newuser-input-container">
                <label>Phone</label>
                <input placeholder='+1 123 456 78' type="text" />
            </div>
            <div className="newuser-input-container">
                <label>Address</label>
                <input placeholder='New York | USA' type="text" />
            </div>
            <div className="newuser-input-container">
                <label>Gender</label>
                <div className="gender-checkbox-container">
                    <div className="gender-checkbox">
                        <input type="checkbox"/>
                        <label>Male</label>
                    </div>
                    <div className="gender-checkbox">
                        <input type="checkbox"/>
                        <label>Female</label>
                    </div>
                    <div className="gender-checkbox">
                        <input type="checkbox"/>
                        <label>Other</label>
                    </div>
                </div>
            </div>
            <div className="newuser-input-container">
                <label>Active</label>
                <select className='active-container'>
                    <option value="">Yes</option>
                    <option value="">No</option>
                </select>
            </div>
            <button className='newuser-btn'>
                Create
            </button>
            
        </form>
    </div>
  )
}

export default NewUser
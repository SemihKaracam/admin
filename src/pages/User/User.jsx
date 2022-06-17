import React from 'react'
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import "./user.css"
import { Link } from 'react-router-dom';
const User = () => {
    return (
        <div className='user'>
            <div className="user-edit-details">
                <h3 className='user-edit-title'>Edit User</h3>
                <Link to="/newuser">
                    <button className='user-create-btn'>Create</button>
                </Link>
            </div>
            <div className='user-container'>
                <div className="user-left">
                    <div className="user-show">
                        <img className='user-img' src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <div className="user-name-job">
                            <span className='user-name'>Anna Beck</span>
                            <span className='user-job'>Software Engineer</span>
                        </div>
                    </div>
                    <div className="user-details">
                        <span className='account-details'>Account Details</span>
                        <div className="user-detail-info">
                            <PermIdentity />
                            <span>annabeck39</span>
                        </div>
                        <div className="user-detail-info">
                            <CalendarToday />
                            <span>10.12.1999</span>
                        </div>


                        <span className='contact-details'>Contact Details</span>
                        <div className="user-detail-info">
                            <PhoneAndroid />
                            <span>+1 123 456 67</span>
                        </div>
                        <div className="user-detail-info">
                            <MailOutline />
                            <span>annabeck99@gmail.com</span>
                        </div>
                        <div className="user-detail-info">
                            <LocationSearching />
                            <span>New York | USA</span>
                        </div>
                    </div>

                </div>
                <div className="user-right">
                    <h4 className='edit-form-title'>Edit</h4>
                    <div className='user-form-container'>
                        <form className='user-form' action="">
                            <div className='user-input-container'>
                                <label>Username</label>
                                <input placeholder="annabeck99" type="text" />
                            </div>
                            <div className='user-input-container'>
                                <label>Full Name</label>
                                <input placeholder="Anna Becker" type="text" />
                            </div>
                            <div className='user-input-container'>
                                <label>Email</label>
                                <input placeholder="annabeck99@gmail.com" type="text" />
                            </div>
                            <div className='user-input-container'>
                                <label>Phone</label>
                                <input placeholder="+1 123 456 67" type="text" />
                            </div>
                            <div className='user-input-container'>
                                <label>Address</label>
                                <input placeholder="New York | USA" type="text" />
                            </div>
                        </form>
                        <div className='upload-image-container'>
                            <img className='upload-image' src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                            <Publish cursor="pointer" />
                        </div>
                        <button className='user-update-btn'>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
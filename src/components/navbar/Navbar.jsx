import { LanguageRounded, NotificationsNoneRounded, Settings } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" className='link'>
        <div className="nav-left">
          <h3>
            adminpanel
          </h3>
        </div>
      </Link>
      <div className="nav-right">
        <div className='nav-right-item'>
          <NotificationsNoneRounded style={{ fontSize: "30px" }} />
          <div className='badge'>1</div>
        </div>
        <div className='nav-right-item'>
          <LanguageRounded style={{ fontSize: "30px" }} />
          <div className='badge'>2</div>
        </div>
        <div className='nav-right-item'>
          <Settings style={{ fontSize: "30px" }} />
        </div>
        <img className='profile-pic' src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      </div>
    </div>
  )
}

export default Navbar
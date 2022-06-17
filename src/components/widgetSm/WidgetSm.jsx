import React from 'react'
import "./widgetSm.css"
import { Visibility } from "@material-ui/icons";

const WidgetSm = () => {
  return (
    <div className='widget-sm'>
        <h3 className='widget-sm-title'>New Join Members</h3>
        <div className="members-container">
            <div className="member">
                <img className='member-img' src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <div className='member-info'>
                    <span className='member-name'>Anna Keller</span>
                    <span className='member-job'>Software Engineer</span>
                </div>
                <button className='display-btn'>
                    <Visibility className='visibility-icon'/>
                    <span>Display</span>
                </button>
            </div>
            <div className="member">
                <img className='member-img' src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <div className='member-info'>
                    <span className='member-name'>Anna Keller</span>
                    <span className='member-job'>Software Engineer</span>
                </div>
                <button className='display-btn'>
                    <Visibility className='visibility-icon'/>
                    <span>Display</span>
                </button>
            </div>
            <div className="member">
                <img className='member-img' src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <div className='member-info'>
                    <span className='member-name'>Anna Keller</span>
                    <span className='member-job'>Software Engineer</span>
                </div>
                <button className='display-btn'>
                    <Visibility className='visibility-icon'/>
                    <span>Display</span>
                </button>
            </div>
            <div className="member">
                <img className='member-img' src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <div className='member-info'>
                    <span className='member-name'>Anna Keller</span>
                    <span className='member-job'>Software Engineer</span>
                </div>
                <button className='display-btn'>
                    <Visibility className='visibility-icon'/>
                    <span>Display</span>
                </button>
            </div>
            <div className="member">
                <img className='member-img' src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <div className='member-info'>
                    <span className='member-name'>Anna Keller</span>
                    <span className='member-job'>Software Engineer</span>
                </div>
                <button className='display-btn'>
                    <Visibility className='visibility-icon'/>
                    <span>Display</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default WidgetSm
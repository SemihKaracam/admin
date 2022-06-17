import React from 'react'
import "./sidebar.css"
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@material-ui/icons";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-item'>
                <span>Dashboard</span>
                <div className='dashboard'>
                    <Link to="/" className='link'>
                        <div className='flex'>
                            <LineStyle className='sidebar-icon' />
                            <span>Home</span>
                        </div>
                    </Link>
                    <div className='flex'>
                        <Timeline className='sidebar-icon' />
                        <span>Analytics</span>
                    </div>
                    <div className='flex'>
                        <TrendingUp className='sidebar-icon' />
                        <span>Sales</span>
                    </div>
                </div>
            </div>
            <div className='sidebar-item'>
                <span>Quick Menu</span>
                <div className='dashboard'>
                    <Link to="/users" className='link'>
                        <div className='flex'>
                            <PermIdentity className='sidebar-icon' />
                            <span>Users</span>
                        </div>
                    </Link>
                    <Link to="/products" className='link'>
                        <div className='flex'>
                            <Storefront className='sidebar-icon' />
                            <span>Products</span>
                        </div>
                    </Link>
                    <div className='flex'>
                        <AttachMoney className='sidebar-icon' />
                        <span>Transactions</span>
                    </div>
                    <div className='flex'>
                        <BarChart className='sidebar-icon' />
                        <span>Reports</span>
                    </div>
                </div>
            </div>
            <div className='sidebar-item'>
                <span>Notifications</span>
                <div className='dashboard'>
                    <div className='flex'>
                        <MailOutline className='sidebar-icon' />
                        <span>Mail</span>
                    </div>
                    <div className='flex'>
                        <DynamicFeed className='sidebar-icon' />
                        <span>Sales</span>
                    </div>
                    <div className='flex'>
                        <ChatBubbleOutline className='sidebar-icon' />
                        <span>Messages</span>
                    </div>
                </div>
            </div>
            <div className='sidebar-item'>
                <span>Staff</span>
                <div className='dashboard'>
                    <div className='flex'>
                        <WorkOutline className='sidebar-icon' />
                        <span>Manage</span>
                    </div>
                    <div className='flex'>
                        <TrendingUp className='sidebar-icon' />
                        <span>Analytics</span>
                    </div>
                    <div className='flex'>
                        <Report className='sidebar-icon' />
                        <span>Reports</span>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Sidebar
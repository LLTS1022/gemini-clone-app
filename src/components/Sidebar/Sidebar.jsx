import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>

        <div className="top">
        <img className='menu' src={assets.menu_icon}alt=""/>
        <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
           <p>New Chat</p>
        </div>
        <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry"></div>
            <img src={assets.message_icon} alt=""/>
            <p>What is React.JS?</p>
        </div>
        </div>

        <div className="bottom">
        <div className="bottom-item">
            <img src={assets.question_icon} alt=""/>
        </div>
        </div>
    </div>
  )
}

export default Sidebar
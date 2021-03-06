import React from 'react'
import { useSelector } from 'react-redux';
import "./Sidebar.css"
import { Avatar } from '@material-ui/core'
import { selectUser } from './features/counter/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);
    // console.log(user);
    // console.log(user?.email[0]);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hashtag">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar className="sidebar__avatar" src={user?.photoURL}>{user?.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__status">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">7</p>
                </div>
                <div className="sidebar__stat">
                    <p>View on post</p>
                    <p className="sidebar__statNumber">17</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('ReactJS')}
                {recentItem('Programming')}
                {recentItem('Software engineer')}
                {recentItem('Design')}
                {recentItem('Developer')}
            </div>
        </div>
    )
}

export default Sidebar

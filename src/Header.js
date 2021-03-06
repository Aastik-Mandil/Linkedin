import React from 'react'
import "./Header.css"
import { Search, Home, SupervisorAccount, Message, Notifications, BusinessCenter } from '@material-ui/icons'
import HeaderOption from './HeaderOption'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/counter/userSlice';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutUser = () => {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="Linkedin Logo" />
                <div className="header__search">
                    <Search />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={Home} title="Home" />
                <HeaderOption Icon={SupervisorAccount} title="My Network" />
                <HeaderOption Icon={BusinessCenter} title="Jobs" />
                <HeaderOption Icon={Message} title="Messaging" />
                <HeaderOption Icon={Notifications} title="Notifications" />
                <HeaderOption avatar={true} title={user?.displayName} onClick={logoutUser} />
            </div>
        </div>
    )
}

export default Header

import React from 'react';
import './Header.css';

const HeaderText = () => {
    return (
        <p className="header-text">Let's learn React by building simple interfaces with components. Don't try to overthink it. Just keep it simple and have fun. Once you feel comfortable using components, you are well on your way to mastering React!</p>
    )
}

const HeaderTitle = () => {
    return (
        <div className="header-title">
            <h4 className="header1">Lambda School</h4>
            <p className="header2">@LambdaSchool</p>
            <p className="header3">May 8, 2018</p>
        </div>
    )
}

const Avatar = () => {
    return (
        <img className="avatar" src="https://ibin.co/3whrpKSBbZ81.png" />
    )    
}

const Header = () => {
    return (
        <div className="header">
            <Avatar />
            <HeaderTitle />
            <HeaderText />
        </div>
    )
}

export default Header;
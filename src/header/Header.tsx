import React from "react";
import "./Header.scss";

type HeaderProps = {
  logo: string;
  userIcon: string;
  username: string;
};

const Header: React.FC<HeaderProps> = ({ logo, userIcon, username }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Логотип" />
      </div>
      <div className="user-container">
        <img src={userIcon} alt="Иконка пользователя" className="user-icon" />
        <span className="username">{username}</span>
      </div>
    </header>
  );
};

export default Header;

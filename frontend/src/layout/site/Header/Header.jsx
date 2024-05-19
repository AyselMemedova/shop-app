import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header_ust">
        <div className="header_ust_left">
          <ul>
            <li>+12312-3-1209 </li>
            <li>SUPPORT@COLORLIB.COM</li>
          </ul>
        </div>

        <div className="header_ust_right">
          <button>Login</button>
        </div>
      </div>

      <div className="header_alt">

      <div className="header_alt_logo">
      <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
      </div>

      <div className="header_alt_container">
      <ul>
        <li>Home</li>
        <li>category</li>
        <li>Men</li>
        <li>Women</li>
        <li>Latest</li>
        <li>Pages</li>
      </ul>

      </div>

      </div>
    </div>
  );
};

export default Header;

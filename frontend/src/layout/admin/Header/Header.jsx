import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>

      <div className="header_alt">

      <div className="header_alt_logo">
        <h1>Admin</h1>
      </div>

      <div className="header_alt_container">
      <ul>
        <li>
          <Link to="/admin" >Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/add" >Add Product</Link>
        </li>
        <li>
          <Link to="/admin/products" >Products</Link>
        </li>
      </ul>

      </div>

      </div>
    </div>
  );
};

export default Header;

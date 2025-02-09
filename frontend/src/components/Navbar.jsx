import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navabr-logo">
        <a href="/home">Book Store</a>
      </div>
      {/* {links} */}
      <ul className="navbar-link">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>T</Avatar>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

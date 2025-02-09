import React, { useRef, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button, Popover, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Cart } from "../pages/cart/Cart";
import { toast } from "react-toastify";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    localStorage?.clear();
    navigate("/login");
    toast.success("Logged out Successfully!!!");
  };

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
          <Link onClick={() => setShowModal(true)}>Cart</Link>
        </li>
        <li>
          <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={handleClick}>
            T
          </Avatar>
          <Popover
            id="profile-popup"
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Button sx={{ p: 2 }} onClick={() => logout()}>
              Logout
            </Button>
          </Popover>
        </li>
      </ul>
      <Cart showModal={showModal} handleClose={() => setShowModal(false)} />
    </nav>
  );
};

export default Navbar;

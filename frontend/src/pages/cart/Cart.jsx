import { Box, Button, Modal, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import "./cart.css";
import { CartItem } from "./cartItem";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { resetCart } from "../../../Services/Redux/CartData/CartDataSlice";

export const Cart = (props) => {
  //   const handleOpen = () => {
  //     console.log("open", open);
  //     setOpen(true);
  //   };
  const handleClose = () => props?.handleClose();

  const dispatch = useDispatch();
  const checkOutFn = () => {
    dispatch(resetCart());
    props?.handleClose();
    toast.success("Products CheckedOut Successfully!!!");
  };
  return (
    <Modal
      open={props?.showModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="cart-modal">
        <Typography id="modal-modal-title" variant="h5" component="h2">
          Cart
        </Typography>
        <CartItem />
        <div className="check-btn-container">
          <Button variant="contained" onClick={checkOutFn}>
            Checkout
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

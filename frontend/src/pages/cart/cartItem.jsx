import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeFromCart,
} from "../../../Services/Redux/CartData/CartDataSlice";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import "./cart.css";
import { AddSharp, RemoveSharp } from "@mui/icons-material";

export const CartItem = () => {
  const products = useSelector((state) => state.cartDataSlice?.items);
  console.log(useSelector((state) => state.cartDataSlice?.items));
  const dispatch = useDispatch();

  const addItem = (id) => {
    console.log(id);
    dispatch(addItemToCart({ id }));
  };

  const reduceItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="cart_body">
      {products?.map((x) => (
        <Card sx={{ display: "flex" }} key={x.id}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={x?.productImage}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography component="div" variant="h5">
                {x.name}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                {x.price}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton onClick={() => addItem(x.id)}>
                <AddSharp />
              </IconButton>
              <p>{x.count}</p>
              <IconButton onClick={() => reduceItem(x.id)}>
                <RemoveSharp />
              </IconButton>
            </Box>
          </Box>
        </Card>
      ))}
    </div>
  );
};

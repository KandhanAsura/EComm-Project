import React, { useEffect } from "react";
import "./loader.css"; // Ensure you create a corresponding CSS file
import { Box } from "@mui/material";

export const Loader = (props) => {
  return (
    <Box className={`loader-container ${props.showLoader ? "" : "d-none"}`}>
      <Box
        className="loader"
        sx={{ width: { xs: "50px", sm: "75px", md: "100px" } }}
      ></Box>
    </Box>
  );
};

import React from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export const ProtectedRoute = ({ children }) => {
  const authenticate = () => {
    let token = localStorage.getItem("token");
    if (!token) return false;
    return true;
  };
  console.log("authenticate", authenticate());

  if (authenticate()) return children;
  else return <Navigate to="/login" />;
};

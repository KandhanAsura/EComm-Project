import React from "react";
import Navbar from "../../components/Navbar";
import { ProtectedRoute } from "../protectedRoute/ProtectedRoute";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

export const MainLayout = () => {
  return (
    <ProtectedRoute>
      <Navbar />
      <Outlet />
      <Footer />
    </ProtectedRoute>
  );
};

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeContent from "./pages/home/home";
import Product from "./pages/product/product";
import { ToastContainer } from "react-toastify";
import { LoginRegisterPage } from "./pages/loginRegister/LoginRegisterPage";
import { ProtectedRoute } from "./common_components/protectedRoute/ProtectedRoute";
import { MainLayout } from "./common_components/mainLayout/MainLayout";
function App() {
  return (
    <div className="app-container">
      <ToastContainer position="bottom-right" theme="colored" />
      <Routes>
        <Route path="/login" element={<LoginRegisterPage />} />

        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<HomeContent />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/cart" element={<h1>Cart Page</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

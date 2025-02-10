import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeContent from "./pages/home/home";
import Product from "./pages/product/product";
import Contact from "./pages/contact";
import About from "./pages/about";
import { ToastContainer } from "react-toastify";
import { LoginRegisterPage } from "./pages/loginRegister/LoginRegisterPage";
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<h1>Cart Page</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartDrawer from "./components/CartDrawer";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import ImageSlider from "./components/Imgslider";
import Footer from "./components/Footer";
import PremiumProducts from "./components/PremiumProducts";
import SubscriptionForm from "./components/SubscriptionForm";
import "./styles/App.css";

export default function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <Navbar
        cartCount={cart.length}
        onCartOpen={() => setCartOpen(true)}
        onLoginOpen={() => setShowLogin(true)}
        onSignupOpen={() => setShowSignup(true)}
        user={user}
        onLogout={logout}
      />

      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <ImageSlider />
              <ProductList addToCart={addToCart} />
              <PremiumProducts />
              <Footer />
            </>
          }
        />

        {/* 🥛 Monthly Package Page */}
        <Route path="/monthly-package" element={<SubscriptionForm />} />
      </Routes>

      {/* 🛒 Cart Drawer */}
      <CartDrawer
        cart={cart}
        setCart={setCart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />

      {/* 🔐 Modals */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitch={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
          onLogin={(user) => setUser(user)}
        />
      )}

      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          onSwitch={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </Router>
  );
}

import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ cartCount, onCartOpen, onLoginOpen, onSignupOpen, user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo"><span className="bold">WHITE</span> CRAFT</div>

        {/* Mobile menu toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/monthly-package" onClick={() => setMenuOpen(false)}>Monthly Package</Link></li>
          <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
          <li><a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        </ul>

        {/* Right side buttons */}
        <div className="nav-right">
          {!user ? (
            <>
              <button className="nav-btn" onClick={onLoginOpen}>Login</button>
              <button className="nav-btn" onClick={onSignupOpen}>Sign Up</button>
            </>
          ) : (
            <button className="nav-btn logout" onClick={onLogout}>Logout</button>
          )}

          <div className="cart" onClick={onCartOpen}>
            <ShoppingCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </div>
      </div>
    </nav>
  );
}

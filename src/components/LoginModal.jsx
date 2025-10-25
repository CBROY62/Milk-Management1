import React, { useState } from "react";
import { X } from "lucide-react";
import "../styles/Modal.css";

export default function LoginModal({ onClose, onSwitch, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      onLogin(savedUser);
      onClose();
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-modal" onClick={onClose}><X /></button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <button className="link-btn" onClick={onSwitch}>Sign Up</button></p>
      </div>
    </div>
  );
}

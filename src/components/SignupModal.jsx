import React, { useState } from "react";
import { X } from "lucide-react";
import "../styles/Modal.css";

export default function SignupModal({ onClose, onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Account created successfully!");
    onSwitch();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-modal" onClick={onClose}><X /></button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Create Account</button>
        </form>
        <p>Already have an account? <button className="link-btn" onClick={onSwitch}>Login</button></p>
      </div>
    </div>
  );
}

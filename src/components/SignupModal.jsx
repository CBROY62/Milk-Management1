import React, { useState } from "react";
import { X } from "lucide-react";
import "../styles/Modal.css";

export default function SignupModal({ onClose, onSwitch }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Account created successfully!");
    onSwitch();
  };

  return (
    <div className="modal-overlay">
      <div className="signup-wrapper">
        <button className="close-modal" onClick={onClose}>
          <X />
        </button>

        <div className="signup-card">
          <h2>Registration</h2>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <label className="checkbox">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              I accept all terms & conditions
            </label>
            <button type="submit">Register Now</button>
          </form>
          <p className="login-text">
            Already have an account?{" "}
            <button className="link-btn" onClick={onSwitch}>
              Login now
            </button>
          </p>
        </div>

        <div className="signup-side">
          <h1>
          <br />Sign up<br />Form
          </h1>
        </div>
      </div>
    </div>
  );
}

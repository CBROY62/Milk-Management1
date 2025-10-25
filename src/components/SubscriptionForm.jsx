import React, { useState } from "react";
import "../styles/SubscriptionForm.css";

export default function SubscriptionForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    duration: "",
    location: "",
    milkType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your ${formData.milkType} milk package has been submitted.`);
    setFormData({
      name: "",
      contact: "",
      email: "",
      duration: "",
      location: "",
      milkType: "",
    });
  };

  return (
    <section id="subscription" className="subscription-section">
      <h2>Contact Monthly Package Milk</h2>
      <form className="subscription-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name of Customer</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email ID</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Duration (Months)</label>
          <input type="number" name="duration" value={formData.duration} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Location / Area Name</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Type of Milk</label>
          <select name="milkType" value={formData.milkType} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="Cow">Cow</option>
            <option value="Buffalo">Buffalo</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </section>
  );
}

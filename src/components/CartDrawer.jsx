import React from "react";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import "../styles/CartDrawer.css";

export default function CartDrawer({ cart, setCart, cartOpen, setCartOpen }) {
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <div className={`cart-drawer ${cartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="close-btn" onClick={() => setCartOpen(false)}>
            <X />
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="empty">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="item-info">
                    <span>{item.name}</span>
                    <span>₹{item.price * item.qty}</span>
                  </div>

                  <div className="item-controls">
                    <button onClick={() => decreaseQty(item.id)}><Minus size={14} /></button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}><Plus size={14} /></button>
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <strong>Total:</strong>
              <span>₹{total}</span>
            </div>
          </>
        )}
      </div>

      {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)}></div>}
    </>
  );
}

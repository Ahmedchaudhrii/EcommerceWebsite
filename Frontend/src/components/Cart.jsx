// src/pages/Cart.jsx
import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Classic White Shirt", price: 1200, quantity: 1, image: "/images/shirt1.jpg" },
    { id: 2, name: "Casual Blue Shirt", price: 1500, quantity: 2, image: "/images/shirt2.jpg" },
  ]);

  return (
    <div className="container px-4 py-10 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between p-4 mb-4 border rounded-lg">
            <span>{item.name} (x{item.quantity})</span>
            <span>Rs {item.price * item.quantity}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

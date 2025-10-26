// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container px-4 py-10 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between p-4 mb-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-16 h-16 rounded"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">Rs {item.price * item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="mt-2 text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right">
            <h2 className="text-xl font-semibold">
              Total: Rs {total.toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

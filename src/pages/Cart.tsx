// pages/CartPage.tsx
import React from "react";
import { useCart } from "../ContextProvider/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../layout/ShoppingNavBar";
import Footer from "../layout/Footer";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum:any, item:any) => sum + item.price * item.quantity, 0);

  return (
    <>
    <Navbar/>
    <div className="max-w-5xl min-h-screen  mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/shoppingpage" className="text-blue-600">Shop now</Link>.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item:any) => (
              <div key={item.id} className="flex items-center gap-6 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="px-2 border">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} disabled={item.quantity >= item.stock} className="px-2 border">+</button>
                  </div>
                </div>
                <p className="font-bold">${item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)} className="text-red-600">Remove</button>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total: ${total}</h2>
            <Link to="/checkout" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default CartPage;

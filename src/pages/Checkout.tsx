// pages/CheckoutPage.tsx
import React from "react";
import { useCart } from "../ContextProvider/CartContext";
import Navbar from "../layout/ShoppingNavBar";
import Footer from "../layout/Footer";

const CheckoutPage: React.FC = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum:any, item:any) => sum + item.price * item.quantity, 0);

  return (
   <>
   <Navbar/>
    <div className="max-w-4xl min-h-screen mx-auto px-6 py-12">
      
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-3">
          {cart.map((item:any) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} × {item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="border-t mt-4 pt-4 flex justify-between font-bold">
          <span>Total</span>
          <span>${total}</span>
        </div>
        <button className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800">
          Confirm & Pay
        </button>
      </div>
    </div>

    <Footer/>
   </>
  );
};

export default CheckoutPage;

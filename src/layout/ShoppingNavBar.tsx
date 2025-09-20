// components/Navbar.tsx
import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../ContextProvider/CartContext"
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-black text-white px-6  py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">🎵 MMBM</Link>
      <div className="flex items-center gap-6">
        <Link to="/shoppingpage">Shop</Link>
        <Link to="/cart" className="relative">
          <ShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2">
              {cart.reduce((sum: any, item:any) => sum + item.quantity, 0)}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


import React from "react";
import ShopPage from "./pages/Shopping";
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Home from "./pages/Home";
import { CartProvider } from "./ContextProvider/CartContext";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import ShopPage1 from "./pages/Shop";

const App: React.FC = () => {
 
 

  return (
    <>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shoppingpage" element={<ShopPage/>} />
        <Route path="/shop" element={<ShopPage1/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        
       

      </Routes>
      </CartProvider>
      
    </>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

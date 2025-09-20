import React from "react";
// import { ShoppingCart } from "lucide-react";
import Footer from "../layout/Footer";
import ShopPage1 from "./Shop";
import Navbar from "../layout/ShoppingNavBar";

// const products = [
//   {
//     id: 1,
//     name: "Artist Signature Hoodie",
//     description: "Premium cotton blend with embroidered logo.",
//     price: 120,
//     image: "https://source.unsplash.com/600x800/?hoodie,black",
//   },
//   {
//     id: 2,
//     name: "Limited Edition T-Shirt",
//     description: "Exclusive drop – 100% organic cotton.",
//     price: 60,
//     image: "https://source.unsplash.com/600x800/?tshirt,white",
//   },
//   {
//     id: 3,
//     name: "Custom Denim Jacket",
//     description: "Hand-stitched with artist artwork on the back.",
//     price: 200,
//     image: "https://source.unsplash.com/600x800/?denim,jacket",
//   },
//   {
//     id: 4,
//     name: "Logo Cap",
//     description: "Adjustable fit, embroidered front logo.",
//     price: 45,
//     image: "https://source.unsplash.com/600x800/?cap,hat",
//   },
// ];

const ShopPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Shop the Official Collection
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Step into the world of our top artist. Premium streetwear, limited drops, and exclusive designs only available here.
        </p>
      </div>

      {/* Products Grid */}
     <ShopPage1/> 
       <Footer/>
    </div>
  );
};

export default ShopPage;

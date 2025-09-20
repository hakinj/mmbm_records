import React from "react";
import ProductCard from "../utils/Products";
//  
const products = [
  { id: 1, name: "Limited Tee", description: "Premium hoodie", price: 120, stock: 5, image: "/Image1.png" },
  { id: 2, name: "Limited Tee", description: "Exclusive cotton tee", price: 200, stock: 0, image: "/Image2.png" },
  { id: 3, name: "Custom Tshirt", description: "Hand-stitched denim", price: 200, stock: 3, image: "/Image3.png" },
  { id: 4, name: "Custom Tshirt", description: "Hand-stitched denim", price: 200, stock: 3, image: "/Image4.png" },
  { id: 5, name: "Artist Hoodie", description: "Hand-stitched denim", price: 200, stock: 3, image: "/Image5.png" }
];

const ShopPage1: React.FC = () => (
  <>
  <div className="max-w-7xl mx-auto px-6 py-12">
    
    <h1 className="text-3xl font-bold mb-8">Shop Collection</h1>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  
  </div>
   
    </>
);

export default ShopPage1;

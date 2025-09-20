// components/ProductCard.tsx
import React, { useState } from "react";
import { useCart } from "../ContextProvider/CartContext";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();
  const [preview, setPreview] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md cursor-pointer"
        onClick={() => setPreview(true)}
      />
      <h3 className="mt-4 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="font-bold text-lg">${product.price}</span>
        {product.stock > 0 ? (
          <span className="text-green-600 text-sm">In Stock</span>
        ) : (
          <span className="text-red-600 text-sm">Out of Stock</span>
        )}
      </div>
      <button
        onClick={() => addToCart(product)}
        disabled={product.stock === 0}
        className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 disabled:opacity-50"
      >
        Add to Cart
      </button>

      {/* Preview Modal */}
      {preview && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-lg relative">
            <button
              onClick={() => setPreview(false)}
              className="absolute top-2 right-2 text-black"
            >
              ✖
            </button>
            <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded" />
            <h2 className="mt-4 text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="mt-3 text-lg font-bold">${product.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

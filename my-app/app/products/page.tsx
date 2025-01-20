"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Products = () => {
  const router = useRouter();
  
  const products = [
    { id: "1987", name: "Premium Headphones", price: "$299" },
    { id: "1988", name: "Wireless Speaker", price: "$199" },
    { id: "1989", name: "Smart Watch", price: "$249" },
  ];

  return ( 
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.price}</p>
            <button
              onClick={() => router.push(`/products/${product.id}`)}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md
                       hover:bg-blue-700 transition-colors duration-200"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

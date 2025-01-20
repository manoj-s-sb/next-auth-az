"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const ProductDetails = () => {
  const params = useParams();
  const router = useRouter();

  // Mock product data - replace with actual data fetching
  const product = {
    id: params.productsId,
    name: "Premium Product",
    description: "High-quality product with amazing features",
    price: "$299",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <button
        onClick={() => router.back()}
        className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2"
      >
        <span>←</span> Back to Products
      </button>

      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <p className="text-2xl font-bold text-blue-600 mb-6">{product.price}</p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => router.push(`/products/${params.productsId}/review/65`)}
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg
                     hover:bg-blue-700 transition-colors duration-200
                     shadow-md hover:shadow-lg"
          >
            Read Reviews
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

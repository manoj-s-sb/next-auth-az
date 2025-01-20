"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const ProductId = () => {
  const params = useParams();
  const router = useRouter();
  return (
    <>
      <div>product Id is {params.productsId}</div>
      <button
        onClick={() => {
          router.push(`/products/${params.productsId}/review/65`);
        }}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Click to see review
      </button>
    </>
  );
};

export default ProductId;

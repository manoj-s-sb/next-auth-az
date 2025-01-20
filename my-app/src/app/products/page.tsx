"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Products = () => {
  const router = useRouter();

  const handleNavigate = (id: string) => {
    // Navigate to a dynamic route
    router.push(`/products/${id}`);
  };
  return (
    <div>
      <button
        onClick={() => {
          handleNavigate("1987");
        }}
      >
        view product details
      </button>
    </div>
  );
};

export default Products;

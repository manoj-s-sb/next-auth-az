"use client";
import { useParams } from "next/navigation";
import React from "react";

const ReviewPage: React.FC = () => {
  const params = useParams();
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Review</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <p>Review #{params.review} for Product {params.productsId}</p>
      </div>
    </div>
  );
};

export default ReviewPage;

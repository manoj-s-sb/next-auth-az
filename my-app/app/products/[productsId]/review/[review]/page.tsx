"use client";
import { notFound, useParams, useRouter } from "next/navigation";
import React from "react";

const ReviewPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();

  // Mock review data - replace with actual data fetching
  const review = {
    id: params.review,
    productId: params.productsId,
    rating: 4,
    author: "John Doe",
    date: "March 15, 2024",
    content:
      "This product exceeded my expectations. The quality is outstanding and the features are exactly what I needed.",
  };

  if (params?.review && parseInt(params.review as string) > 1000) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <button
        onClick={() => router.back()}
        className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2"
      >
        <span>←</span> Back to Product
      </button>

      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Product Review
        </h1>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-700">{review.author}</span>
            <span className="text-gray-500 text-sm">{review.date}</span>
          </div>

          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-2xl ${
                  index < review.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed">{review.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;

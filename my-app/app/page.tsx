"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome to Our Store
        </h1>
        <button
          onClick={() => router.push("./products")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg
                   hover:bg-blue-700 transition-colors duration-200
                   shadow-md hover:shadow-lg"
        >
          View Products
        </button>
      </div>
    </main>
  );
}

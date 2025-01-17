"use client";
import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { fetchApiData } from "../utils/apiService";

/**
 * Dashboard component that fetches and displays user data
 * Uses MSAL instance for authenticated API calls
 */
const Dashboard: React.FC = () => {
  const { instance } = useMsal();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch data with error handling
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const apiData = await fetchApiData(instance);
      setData(apiData);
    } catch (error) {
      setError("Failed to fetch data. Please try again.");
      console.error("Data fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instance]);

  return (
    <div className="p-4 space-y-4">
      <button 
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={fetchData}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Refresh Data"}
      </button>
      
      {error && (
        <div className="text-red-500">{error}</div>
      )}
      
      <div className="bg-gray-100 p-4 rounded">
        {isLoading ? (
          "Loading data..."
        ) : (
          <pre className="whitespace-pre-wrap">
            {data ? JSON.stringify(data, null, 2) : "No data available"}
          </pre>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

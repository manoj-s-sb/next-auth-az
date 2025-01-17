"use client";
import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { fetchApiData } from "../utils/apiService";

const Dashboard = () => {
  const { instance } = useMsal();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchApiData(instance);
        setData(apiData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [instance]);

  return <div>
    <button onClick={()=>{
    fetchApiData(instance).then((data)=>{
      setData(data)
    })  
    }}>Api</button>
    <div>{data ? JSON.stringify(data) : "Loading data..."}</div>
  </div>;
};

export default Dashboard;

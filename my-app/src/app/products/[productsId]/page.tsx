"use client";
import { useParams } from "next/navigation";
import React from "react";

const ProductId = () => {
  const params = useParams();
  console.log("params", params);
  return <div>product Id is {params.productsId}</div>;
};

export default ProductId;

"use client";

import LoginComponent from "@/components/LoginComponent";
import { fetchProductList } from "@/services/productService";
import { productListSelector } from "@/state/product/productState";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const productList = useSelector(productListSelector) || [];

  useEffect(() => {
    fetchProductList(0, 10);
  }, []);

  return (
    <main>
      <LoginComponent />
    </main>
  );
}

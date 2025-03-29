"use client";

import LoginComponent from "@/components/LoginComponent";
import { getCategoryRequest } from "@/services/categoryService";
import { fetchProductList } from "@/services/productService";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    fetchProductList(0, 10);
    getCategoryRequest();
  }, []);

  return (
    <main>
      <LoginComponent />
    </main>
  );
}

"use client";

import { getProductList } from "@/api/endpoints/product/productApi";
import IProduct from "@/models/product/IProduct";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [productList, setProductList] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList: IProduct[] = await getProductList(0, 5);
        setProductList(productList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-[32px]">
          {productList.map((product, key) => (
            <div key={key} className="flex gap-[16px] items-center">
              <div>
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}

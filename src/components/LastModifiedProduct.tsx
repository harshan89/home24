import useScreenSize from "@/hooks/useScreenSize";
import { ISerializedProduct } from "@/models/product/IProduct";
import { FC, useEffect, useState } from "react";

interface Props {
  product: ISerializedProduct;
}

const LastModifiedProduct: FC<Props> = ({ product }) => {
  const { screenWidth } = useScreenSize();

  return (
    <div className="px-5 pt-4 items-center justify-between">
      <h2 className="text-lg font-bold text-gray-800">Last Modified</h2>
      <div className="flex space-x-4">
        <p className="text-sm text-gray-600">
          {screenWidth > 800 && <span className="font-semibold">Name:</span>}{" "}
          {product.name}
        </p>

        <p className="text-sm text-gray-600">
          {screenWidth > 800 && <span className="font-semibold">Price:</span>} $
          {product.price}
        </p>
        {screenWidth > 800 && (
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Last Modified:</span> 3/30/2025
          </p>
        )}
      </div>
    </div>
  );
};

export default LastModifiedProduct;

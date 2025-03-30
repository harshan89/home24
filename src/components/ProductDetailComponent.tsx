import IProduct from "@/models/product/IProduct";
import { FC } from "react";

interface Props {
  product: IProduct;
}

const ProductDetailComponent: FC<Props> = ({ product }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-lg font-semibold text-gray-700 mb-2">
        Price: ${product.price}
      </p>
      <p className="text-sm text-gray-500">Category: {product.categoryType}</p>
    </div>
  );
};

export default ProductDetailComponent;

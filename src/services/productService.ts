import { ISerializedProduct } from "@/models/product/IProduct";
import { deleteProduct, fetchProductRequest, filterProductByCategoryId, updateProduct } from "@/state/product/productState";
import { storeDispatch } from "@/state/store";
import { IProductRequest } from "@/types/product";

export const fetchProductList = async (params: IProductRequest) => {
    storeDispatch(fetchProductRequest(params));
}

export const filterProductByCategory = async (categoryId: number) => {
    storeDispatch(filterProductByCategoryId(categoryId));
}
export const updateProductService = async (product: Partial<ISerializedProduct>) => {
    storeDispatch(updateProduct(product));
}
export const deleteProductService = async (productId: number) => {
    storeDispatch(deleteProduct(productId));
}
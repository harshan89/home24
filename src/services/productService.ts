import { fetchProductRequest, filterProductByCategoryId } from "@/state/product/productState";
import { storeDispatch } from "@/state/store";
import { IProductRequest } from "@/types/product";

export const fetchProductList = async (params: IProductRequest) => {
    storeDispatch(fetchProductRequest(params));
}

export const filterProductByCategory = async (categoryId: number) => {
    storeDispatch(filterProductByCategoryId(categoryId));
}
import { fetchProductRequest } from "@/state/product/productState";
import { storeDispatch } from "@/state/store";
import { IProductRequest } from "@/types/product";

export const fetchProductList = async (params: IProductRequest) => {
    storeDispatch(fetchProductRequest(params));
}
import { fetchProductRequest } from "@/state/product/productState";
import { storeDispatch } from "@/state/store";

export const fetchProductList = async (page: number, size: number) => {
    storeDispatch(fetchProductRequest());
}
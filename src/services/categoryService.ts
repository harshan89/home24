import { storeDispatch } from "@/state/store";
import { categoryRequest } from "@/state/category/categoryState";

export const getCategoryRequest = async () => {
    storeDispatch(categoryRequest());
}
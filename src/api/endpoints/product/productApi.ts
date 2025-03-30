import { adminApiClient } from "@/api/clients"
import { IProductRequest } from "@/types/product";

export const getProductList = async (urlParams: IProductRequest) => {
    try {
        const response = await adminApiClient.get("product", { params: urlParams });
        return response.data;
    } catch (error) {
        console.error("Error while fetching product list:", error);
        throw error;
    }
}
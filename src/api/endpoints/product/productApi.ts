import { adminApiClient } from "@/api/clients"
import { ProductMapper } from "@/mappers/ProductMapper";

export const getProductList = async (page: number = 0, limit: number = 5) => {
    try {
        const response = await adminApiClient.get(`product?page=${page}&limit=${limit}`);
        const formattedData = ProductMapper.toModels(response.data.data);
        return formattedData;
    } catch (error) {
        console.error("Error while fetching product list:", error);
        throw error;
    }
}
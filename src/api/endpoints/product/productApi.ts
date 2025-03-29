import { adminApiClient } from "@/api/clients"

export const getProductList = async (page: number = 0, limit: number = 5) => {
    try {
        const response = await adminApiClient.get(`product?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error while fetching product list:", error);
        throw error;
    }
}
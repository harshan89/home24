import { adminApiClient } from "@/api/clients"
import { ApiResponse } from "@/types/api";
import { ILoginRequest, ILoginResponse } from "@/types/user";

export const loginRequest = async (bodyParams: ILoginRequest): Promise<ApiResponse<ILoginResponse>> => {
    try {
        const response = await adminApiClient.post("user/login", bodyParams);
        return response.data;
    } catch (error) {
        console.error("Error while fetching product list:", error);
        throw error;
    }
}
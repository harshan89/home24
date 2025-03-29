import { storeDispatch } from "@/state/store";
import { loginRequest } from "@/state/user/userState";
import { ILoginRequest } from "@/types/user";

export const userLoginRequest = async (loginData: ILoginRequest) => {
    storeDispatch(loginRequest(loginData));
}
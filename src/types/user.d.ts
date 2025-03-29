export interface ILoginRequest {
    username: string,
    password: string,
    navigator: AppRouterInstance
}

export interface ILoginResponse {
    username: string
}
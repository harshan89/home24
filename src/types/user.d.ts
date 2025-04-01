export interface ILoginRequest {
    username: string,
    password: string,
    navigator: AppRouterInstance,
    notify?: (notify: { type: NotificationType, message: string, description?: string }) => void
}

export interface ILoginResponse {
    username: string
    notify?: (notify: { type: NotificationType, message: string, description?: string }) => void
}
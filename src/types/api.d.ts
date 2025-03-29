export interface ApiResponse<T> {
    status: number;
    success: string;
    data: T;
}
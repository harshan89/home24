export interface IPagination {
    page: number;
    limit: number;
}

export interface ApiResponse<T> {
    status: number;
    success: string;
    data: T;
}
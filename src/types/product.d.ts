import { IPagination } from "./api";

export interface IProductRequest extends IPagination {
    category?: number;
}
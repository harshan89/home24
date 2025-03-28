import { ICategory } from "../category/ICategory";

interface IProduct {
    id?: number;
    name: string;
    price: number;
    stockQuantity: number;
    category: ICategory;
    description?: string;

    isAvailable(): boolean;
    getFormattedPrice(): string;
    validateProduct(): boolean;
}

export default IProduct;
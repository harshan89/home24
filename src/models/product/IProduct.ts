import { ICategory } from "../category/ICategory";

export interface ISerializedProduct {
    id?: number;
    name: string;
    price: number;
    stockQuantity: number;
    category: ICategory;
    description?: string;
}

interface IProduct extends ISerializedProduct {
    isAvailable(): boolean;
    getFormattedPrice(): string;
    validateProduct(): boolean;
    serialize(): ISerializedProduct;
    deserialize(data: ISerializedProduct): void;
}

export default IProduct;
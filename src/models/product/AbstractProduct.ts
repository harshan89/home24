import { ICategory } from "../category/ICategory";
import IProduct from "./IProduct";

abstract class AbstractProduct implements IProduct {
    id?: number;
    name: string;
    price: number;
    stockQuantity: number;
    category: ICategory;
    description?: string;

    constructor(id: number, name: string, price: number, stockQuantity: number, category: ICategory, description?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.category = category;
        this.description = description;
    }

    isAvailable(): boolean {
        return this.stockQuantity > 0;
    }

    getFormattedPrice(): string {
        return `$${this.price.toFixed(2)}`;
    }

    validateProduct(): boolean {
        return this.name.trim() !== "" && this.price > 0 && this.stockQuantity >= 0;
    }

    toString(): string {
        return `${this.name} (ID: ${this.id}, Category: ${this.category.name}) - $${this.getFormattedPrice()}`;
    }
}

export default AbstractProduct;
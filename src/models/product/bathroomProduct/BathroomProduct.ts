import { ICategory } from "@/models/category/ICategory";
import AbstractProduct from "../AbstractProduct";
import IBathroomProduct from "./IBathroomProduct";

class BathroomProduct extends AbstractProduct implements IBathroomProduct {
    waterproof: boolean;
    installationType: string;

    constructor(
        id: number,
        name: string,
        price: number,
        stockQuantity: number,
        category: ICategory,
        waterproof: boolean,
        installationType: string,
        description?: string,
    ) {
        super(id, name, price, stockQuantity, category, description);
        this.waterproof = waterproof;
        this.installationType = installationType;
    }

    toString(): string {
        return `${this.name} (${this.category.name}) - $${this.getFormattedPrice()}, `;
    }
}

export default BathroomProduct;
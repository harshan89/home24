import { ICategory } from "@/models/category/ICategory";
import AbstractProduct from "../AbstractProduct";
import IGardenProduct from "./IGardenProduct";

class GardenProduct extends AbstractProduct implements IGardenProduct {
    plantType: string;
    requiresSunlight: boolean;

    constructor(
        id: number,
        name: string,
        price: number,
        stockQuantity: number,
        category: ICategory,
        plantType: string,
        requiresSunlight: boolean,
        description?: string
    ) {
        super(id, name, price, stockQuantity, category, description);
        this.plantType = plantType;
        this.requiresSunlight = requiresSunlight;
    }

    toString(): string {
        return `${this.name} (${this.category.name}) - $${this.getFormattedPrice()}, Plant Type: ${this.plantType}, Requires Sunlight: ${this.requiresSunlight}`;
    }
}

export default GardenProduct;
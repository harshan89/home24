import { ICategory } from "@/models/category/ICategory";
import AbstractProduct from "../AbstractProduct";
import IGardenProduct, { ISerializedGardenProduct } from "./IGardenProduct";
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

    serialize(): ISerializedGardenProduct {
        return {
            ...super.serialize(),
            plantType: this.plantType,
            requiresSunlight: this.requiresSunlight,
        };
    }

    deserialize(data: ISerializedGardenProduct): void {
        super.deserialize(data);
        if (data) {
            this.plantType = data["plantType"];
            this.requiresSunlight = data["requiresSunlight"];
        }
    }
}

export default GardenProduct;
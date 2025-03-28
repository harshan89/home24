import { ICategory } from "../../category/ICategory";
import AbstractProduct from "../AbstractProduct";
import IFurnitureProduct from "./IFurnitureProduct";

class FurnitureProduct extends AbstractProduct implements IFurnitureProduct {
    material: string;
    weightCapacity: number;
    dimensions: { width: number; height: number; depth: number };

    constructor(
        id: number,
        name: string,
        price: number,
        stockQuantity: number,
        category: ICategory,
        material: string,
        weightCapacity: number,
        dimensions: { width: number; height: number; depth: number },
        description?: string
    ) {
        super(id, name, price, stockQuantity, category, description);
        this.material = material;
        this.weightCapacity = weightCapacity;
        this.dimensions = dimensions;
    }

    toString(): string {
        return `${this.name} (${this.category.name}) - $${this.getFormattedPrice()}, Material: ${this.material}, Capacity: ${this.weightCapacity}kg, Dimensions: ${this.dimensions.width}x${this.dimensions.height}x${this.dimensions.depth}`;
    }
}

export default FurnitureProduct;
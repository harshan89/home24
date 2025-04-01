import { ICategory } from "../../category/ICategory";
import AbstractProduct from "../AbstractProduct";
import IFurnitureProduct, { ISerializedFurnitureProduct } from "./IFurnitureProduct";

class FurnitureProduct extends AbstractProduct implements IFurnitureProduct {
    material: string;
    weightCapacity: number;
    dimensions: { width: number; height: number; depth: number };

    constructor(
        id: number,
        name: string,
        price: number,
        stockQuantity: number,
        categoryType: string,
        category: ICategory,
        material: string,
        weightCapacity: number,
        dimensions: { width: number; height: number; depth: number },
        description?: string,
        image?: string
    ) {
        super(id, name, price, stockQuantity, categoryType, category, description, image);
        this.material = material;
        this.weightCapacity = weightCapacity;
        this.dimensions = dimensions;
    }

    toString(): string {
        return `${this.name} (${this.category.name}) - $${this.getFormattedPrice()}, Material: ${this.material}, Capacity: ${this.weightCapacity}kg, Dimensions: ${this.dimensions.width}x${this.dimensions.height}x${this.dimensions.depth}`;
    }

    serialize(): ISerializedFurnitureProduct {
        return {
            ...super.serialize(),
            material: this.material,
            weightCapacity: this.weightCapacity,
            dimensions: this.dimensions,
        };
    }

    deserialize(data: ISerializedFurnitureProduct): void {
        super.deserialize(data);
        if (data) {
            this.material = data["material"];
            this.weightCapacity = data["weightCapacity"];
            this.dimensions = data["dimensions"];
        }
    }
}

export default FurnitureProduct;
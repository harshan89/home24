import { ICategory } from "@/models/category/ICategory";
import AbstractProduct from "../AbstractProduct";
import IBathroomProduct, { ISerializedBathroomProduct } from "./IBathroomProduct";

class BathroomProduct extends AbstractProduct implements IBathroomProduct {
    waterproof: boolean;
    installationType: string;

    constructor(
        id: number,
        name: string,
        price: number,
        stockQuantity: number,
        categoryType: string,
        category: ICategory,
        waterproof: boolean,
        installationType: string,
        description?: string,
        image?: string,
    ) {
        super(id, name, price, stockQuantity, categoryType, category, description, image);
        this.waterproof = waterproof;
        this.installationType = installationType;
    }

    toString(): string {
        return `${this.name} (${this.category.name}) - $${this.getFormattedPrice()}, `;
    }

    serialize(): ISerializedBathroomProduct {
        return {
            ...super.serialize(),
            waterproof: this.waterproof,
            installationType: this.installationType,
        };
    }

    deserialize(data: ISerializedBathroomProduct): void {
        super.deserialize(data);
        if (data) {
            this.waterproof = data["waterproof"];
            this.installationType = data["installationType"];
        }
    }
}

export default BathroomProduct;
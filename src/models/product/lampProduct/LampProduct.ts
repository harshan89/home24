import { ICategory } from "@/models/category/ICategory";
import AbstractProduct from "../AbstractProduct";
import ILampProduct from "./ILampProduct";

class LampProduct extends AbstractProduct implements ILampProduct {
    wattage: number;
    bulbType: string;
    isDimmable: boolean;

    constructor(
        id: number,
        name: string,
        price: number,
        stockQuantity: number,
        category: ICategory,
        wattage: number,
        bulbType: string,
        isDimmable: boolean,
        description?: string
    ) {
        super(id, name, price, stockQuantity, category, description);
        this.wattage = wattage;
        this.bulbType = bulbType;
        this.isDimmable = isDimmable;
    }

    toString(): string {
        return `${this.name} (${this.category.name}) - $${this.getFormattedPrice()}, Wattage: ${this.wattage}W, Bulb Type: ${this.bulbType}, Dimmable: ${this.isDimmable}`;
    }
}

export default LampProduct;
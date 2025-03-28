import { ICategory, CategoryType } from "../category/ICategory";
import BathroomProduct from "./bathroomProduct/BathroomProduct";
import FurnitureProduct from "./furnitureProduct/FurnitureProduct";
import GardenProduct from "./gardenProduct/GardenProduct";
import Product from "./IProduct";
import LampProduct from "./lampProduct/LampProduct";

type ProductModelUnion = GardenProduct | FurnitureProduct | LampProduct | BathroomProduct;

const createProductModelHelper = (
    id: number,
    name: string,
    price: number,
    stockQuantity: number,
    category: ICategory,
    description?: string,
    additionalAttributes?: ProductModelUnion,
): Product => {
    switch (category.type) {
        case CategoryType.FURNITURE:
            return new FurnitureProduct(
                id,
                name,
                price,
                stockQuantity,
                category,
                (additionalAttributes as FurnitureProduct)?.material || "Unknown",
                (additionalAttributes as FurnitureProduct)?.weightCapacity || 0,
                (additionalAttributes as FurnitureProduct)?.dimensions || { width: 0, height: 0, depth: 0 },
                description
            ) as FurnitureProduct;

        case CategoryType.GARDEN:
            return new GardenProduct(
                id,
                name,
                price,
                stockQuantity,
                category,
                (additionalAttributes as GardenProduct)?.plantType || "Unknown",
                (additionalAttributes as GardenProduct)?.requiresSunlight || false,
                description
            );

        case CategoryType.LAMP:
            return new LampProduct(
                id,
                name,
                price,
                stockQuantity,
                category,
                (additionalAttributes as LampProduct)?.wattage || 0,
                (additionalAttributes as LampProduct)?.bulbType || "Unknown",
                (additionalAttributes as LampProduct)?.isDimmable || false,
                description
            );

        case CategoryType.BATHROOM:
            return new BathroomProduct(
                id,
                name,
                price,
                stockQuantity,
                category,
                (additionalAttributes as BathroomProduct)?.waterproof || false,
                (additionalAttributes as BathroomProduct)?.installationType || "Unknown",
                description,
            );

        default:
            throw new Error(`Category not found: ${category.type}`);
    }
};

export default createProductModelHelper;

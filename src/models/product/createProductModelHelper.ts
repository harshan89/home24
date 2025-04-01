import { CategoryType } from "../category/ICategory";
import BathroomProduct from "./bathroomProduct/BathroomProduct";
import { ISerializedBathroomProduct } from "./bathroomProduct/IBathroomProduct";
import FurnitureProduct from "./furnitureProduct/FurnitureProduct";
import { ISerializedFurnitureProduct } from "./furnitureProduct/IFurnitureProduct";
import GardenProduct from "./gardenProduct/GardenProduct";
import { ISerializedGardenProduct } from "./gardenProduct/IGardenProduct";
import IProduct from "./IProduct";
import { ISerializedLampProduct } from "./lampProduct/ILampProduct";
import LampProduct from "./lampProduct/LampProduct";

export type IProductSerializedUnion = ISerializedGardenProduct | ISerializedFurnitureProduct | ISerializedLampProduct | ISerializedBathroomProduct;

const createProductModelHelper = (
    product: IProductSerializedUnion
): false | IProduct => {

    if (!product)
        return false

    switch (product.category.type) {
        case CategoryType.FURNITURE:
            return new FurnitureProduct(
                product.id!,
                product.name,
                product.price,
                product.stockQuantity,
                product.categoryType,
                product.category,
                (product as ISerializedFurnitureProduct).material,
                (product as ISerializedFurnitureProduct).weightCapacity || 0,
                (product as ISerializedFurnitureProduct).dimensions || { width: 0, height: 0, depth: 0 },
                product.description,
                product.image
            ) as FurnitureProduct;

        case CategoryType.GARDEN:
            return new GardenProduct(
                product.id!,
                product.name,
                product.price,
                product.stockQuantity,
                product.categoryType,
                product.category,
                (product as ISerializedGardenProduct).plantType || "",
                (product as ISerializedGardenProduct).requiresSunlight || false,
                product.description,
                product.image
            );

        case CategoryType.LAMP:
            return new LampProduct(
                product.id!,
                product.name,
                product.price,
                product.stockQuantity,
                product.categoryType,
                product.category,
                (product as ISerializedLampProduct)?.wattage || 0,
                (product as ISerializedLampProduct)?.bulbType || "",
                (product as ISerializedLampProduct)?.isDimmable || false,
                product.description,
                product.image
            );

        case CategoryType.BATHROOM:
            return new BathroomProduct(
                product.id!,
                product.name,
                product.price,
                product.stockQuantity,
                product.categoryType,
                product.category,
                (product as ISerializedBathroomProduct)?.waterproof || false,
                (product as ISerializedBathroomProduct)?.installationType || "",
                product.description,
                product.image
            );

        default:
            throw new Error(`Category not found: ${product.category.type}`);
    }
};

export default createProductModelHelper;

import { ISerializedProduct } from "../IProduct";
export interface ISerializedFurnitureProduct extends ISerializedProduct {
    material: string;
    weightCapacity: number;
    dimensions: { width: number; height: number; depth: number };
}

interface IFurnitureProduct extends ISerializedFurnitureProduct { }

export default IFurnitureProduct;
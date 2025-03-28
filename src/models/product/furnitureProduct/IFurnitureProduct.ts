import Product from "../IProduct";

interface IFurnitureProduct extends Product {
    material: string;
    weightCapacity: number;
    dimensions: { width: number; height: number; depth: number };
}

export default IFurnitureProduct;
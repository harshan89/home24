import { ISerializedProduct } from "../IProduct";
export interface ISerializedGardenProduct extends ISerializedProduct {
    plantType: string;
    requiresSunlight: boolean;
}

interface IGardenProduct extends ISerializedGardenProduct { }

export default IGardenProduct;
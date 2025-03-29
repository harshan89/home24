import { ISerializedProduct } from "../IProduct";
export interface ISerializedBathroomProduct extends ISerializedProduct {
    waterproof: boolean;
    installationType: string;
}
interface IBathroomProduct extends ISerializedBathroomProduct {}

export default IBathroomProduct;
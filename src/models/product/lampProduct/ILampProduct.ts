import { ISerializedProduct } from "../IProduct";
export interface ISerializedLampProduct extends ISerializedProduct {
    wattage: number;
    bulbType: string;
    isDimmable: boolean;
}
interface ILampProduct extends ISerializedLampProduct {}

export default ILampProduct;
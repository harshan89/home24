import IProduct from "../IProduct";

interface ILampProduct extends IProduct {
    wattage: number;
    bulbType: string;
    isDimmable: boolean;
}

export default ILampProduct;
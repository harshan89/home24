import IProduct from "../IProduct";

interface IGardenProduct extends IProduct {
    plantType: string;
    requiresSunlight: boolean;
}

export default IGardenProduct;
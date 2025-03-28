import IProduct from "../IProduct";

interface IBathroomProduct extends IProduct {
    waterproof: boolean;
    installationType: string;
}

export default IBathroomProduct;
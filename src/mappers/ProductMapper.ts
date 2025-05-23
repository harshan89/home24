import { GetBathroomProductDTO, GetFurnitureProductDTO, GetGardenProductDTO, GetLampProductDTO, GetProductDTO } from "@/dtos/product/GetProductDTO";
import { CategoryType, ICategory } from "@/models/category/ICategory";
import BathroomProduct from "@/models/product/bathroomProduct/BathroomProduct";
import FurnitureProduct from "@/models/product/furnitureProduct/FurnitureProduct";
import LampProduct from "@/models/product/lampProduct/LampProduct";
import IProduct from "@/models/product/IProduct";
import GardenProduct from "@/models/product/gardenProduct/GardenProduct";
import { getCategoryDetails } from "@/utils/categoryList";

export class ProductMapper {
    static toModel(dto: GetProductDTO): IProduct {
        switch (dto.categoryType) {
            case CategoryType.BATHROOM:
                return new BathroomProduct(dto.id, dto.name, dto.price!, dto.stockQuantity!, dto.categoryType, getCategoryDetails(dto.categoryId), (dto as GetBathroomProductDTO).waterproof, (dto as GetBathroomProductDTO).installationType, dto.description, dto.image);
            case CategoryType.FURNITURE:
                console.log(dto)
                return new LampProduct(dto.id, dto.name, dto.price!, dto.stockQuantity!, dto.categoryType, getCategoryDetails(dto.categoryId), (dto as GetLampProductDTO).wattage, (dto as GetLampProductDTO).bulbType, (dto as GetLampProductDTO).isDimmable, dto.description, dto.image);
            case CategoryType.LAMP:
                return new FurnitureProduct(dto.id, dto.name, dto.price!, dto.stockQuantity!, dto.categoryType, getCategoryDetails(dto.categoryId), (dto as GetFurnitureProductDTO).material, (dto as GetFurnitureProductDTO).weightCapacity, (dto as GetFurnitureProductDTO).dimensions, dto.description, dto.image);
            case CategoryType.GARDEN:
                return new GardenProduct(dto.id, dto.name, dto.price!, dto.stockQuantity!, dto.categoryType, getCategoryDetails(dto.categoryId), (dto as GetGardenProductDTO).plantType, (dto as GetGardenProductDTO).requiresSunlight, dto.description, dto.image);
            default:
                throw new Error(`Unknown product category: ${dto.categoryType}`);
        }
    }

    static toModels(dtos: GetProductDTO[]): IProduct[] {
        return dtos.map(dto => this.toModel(dto));
    }
}
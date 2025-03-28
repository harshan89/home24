import { GetBathroomProductDTO, GetFurnitureProductDTO, GetGardenProductDTO, GetLampProductDTO, GetProductDTO } from "@/dtos/product/GetProductDTO";
import { CategoryType, ICategory } from "@/models/category/ICategory";
import BathroomProduct from "@/models/product/bathroomProduct/BathroomProduct";
import FurnitureProduct from "@/models/product/furnitureProduct/FurnitureProduct";
import LampProduct from "@/models/product/lampProduct/LampProduct";
import IProduct from "@/models/product/IProduct";
import GardenProduct from "@/models/product/gardenProduct/GardenProduct";

export class ProductMapper {
    static getCategoryDetails(categoryId: number, categoryType: string): ICategory {
        const category: ICategory = {
            id: 1,
            type: CategoryType.BATHROOM,
            name: "Unknown",
            description: "Unknown category",
            image: "default.jpg"
        }

        return category;
    }

    static toModel(dto: GetProductDTO): IProduct {
        switch (dto.categoryType) {
            case CategoryType.BATHROOM:
                return new BathroomProduct(dto.id, dto.name, dto.price!, dto.stockQuantity!, this.getCategoryDetails(1, ""), (dto as GetBathroomProductDTO).waterproof, (dto as GetBathroomProductDTO).installationType, dto.description);
            case CategoryType.FURNITURE:
                return new LampProduct(dto.id, dto.name, dto.price!, dto.stockQuantity!, this.getCategoryDetails(1, ""), (dto as GetLampProductDTO).wattage, (dto as GetLampProductDTO).bulbType, (dto as GetLampProductDTO).isDimmable, dto.description);
            case CategoryType.LAMP:
                return new FurnitureProduct(dto.id, dto.name, dto.price!, dto.stockQuantity!, this.getCategoryDetails(1, ""), (dto as GetFurnitureProductDTO).material, (dto as GetFurnitureProductDTO).weightCapacity, (dto as GetFurnitureProductDTO).dimensions, dto.description);
            case CategoryType.GARDEN:
                return new GardenProduct(dto.id, dto.name, dto.price!, dto.stockQuantity!, this.getCategoryDetails(1, ""), (dto as GetGardenProductDTO).plantType, (dto as GetGardenProductDTO).requiresSunlight, dto.description);
            default:
                throw new Error(`Unknown product category: ${dto.categoryType}`);
        }
    }

    static toModels(dtos: GetProductDTO[]): IProduct[] {
        return dtos.map(dto => this.toModel(dto));
    }
}
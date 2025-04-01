import { CategoryType } from "@/models/category/ICategory";

type ProductDTOIntersection = GetBathroomProductDTO & GetFurnitureProductDTO & GetGardenProductDTO & GetLampProductDTO;
type ProductDTOUnion = GetBathroomProductDTO | GetFurnitureProductDTO | GetGardenProductDTO | GetLampProductDTO;

export class GetProductDTO {
    id: number;
    name: string;
    categoryId: number;
    categoryType: CategoryType;
    description?: string;
    price?: number;
    stockQuantity?: number;
    image?: string;

    constructor(id: number, name: string, categoryId: number, categoryType: CategoryType, price?: number, description?: string, stockQuantity?: number, image?: string) {
        this.id = id;
        this.categoryType = categoryType;
        this.name = name;
        this.categoryId = categoryId;
        this.price = price;
        this.description = description;
        this.stockQuantity = stockQuantity;
        this.image = image;
    }
}

export class GetBathroomProductDTO extends GetProductDTO {
    waterproof: boolean;
    installationType: string;

    constructor(id: number, name: string, categoryId: number, categoryType: CategoryType, waterproof: boolean, installationType: string, price?: number, description?: string, stockQuantity?: number, image?: string) {
        super(id, name, categoryId, categoryType, price, description, stockQuantity, image);
        this.waterproof = waterproof;
        this.installationType = installationType;
    }
}

export class GetFurnitureProductDTO extends GetProductDTO {
    material: string;
    weightCapacity: number;
    dimensions: { width: number; height: number; depth: number };

    constructor(id: number, name: string, categoryId: number, categoryType: CategoryType, price?: number, description?: string, stockQuantity?: number, material?: string, weightCapacity?: number, dimensions?: { width: number; height: number; depth: number }, image?: string) {
        super(id, name, categoryId, categoryType, price, description, stockQuantity, image);
        this.material = material || "Unknown";
        this.weightCapacity = weightCapacity || 0;
        this.dimensions = dimensions || { width: 0, height: 0, depth: 0 };
    }
}

export class GetGardenProductDTO extends GetProductDTO {
    plantType: string;
    requiresSunlight: boolean;

    constructor(id: number, name: string, categoryId: number, categoryType: CategoryType, price?: number, description?: string, stockQuantity?: number, plantType?: string, requiresSunlight?: boolean, image?: string) {
        super(id, name, categoryId, categoryType, price, description, stockQuantity, image);
        this.plantType = plantType || "Unknown";
        this.requiresSunlight = requiresSunlight || false;
    }
}

export class GetLampProductDTO extends GetProductDTO {
    wattage: number;
    bulbType: string;
    isDimmable: boolean;

    constructor(id: number, name: string, categoryId: number, categoryType: CategoryType, price?: number, description?: string, stockQuantity?: number, wattage?: number, bulbType?: string, isDimmable?: boolean, image?: string) {
        super(id, name, categoryId, categoryType, price, description, stockQuantity, image);
        this.wattage = wattage || 0;
        this.bulbType = bulbType || "Unknown";
        this.isDimmable = isDimmable || false;
    }
}

export function createGetProductDTOHelper(data: ProductDTOIntersection): ProductDTOUnion {
    switch (data.categoryType) {
        case CategoryType.BATHROOM:
            return new GetBathroomProductDTO(data.id, data.name, data.categoryId, data.categoryType, data.waterproof, data.installationType, data.price, data.description, data.stockQuantity, data.image);
        case CategoryType.FURNITURE:
            return new GetFurnitureProductDTO(data.id, data.name, data.categoryId, data.categoryType, data.price, data.description, data.stockQuantity, data.material, data.weightCapacity, data.dimensions);
        case CategoryType.GARDEN:
            return new GetGardenProductDTO(data.id, data.name, data.categoryId, data.categoryType, data.price, data.description, data.stockQuantity, data.plantType, data.requiresSunlight);
        case CategoryType.LAMP:
            return new GetLampProductDTO(data.id, data.name, data.categoryId, data.categoryType, data.price, data.description, data.stockQuantity, data.wattage, data.bulbType, data.isDimmable);
        default:
            throw new Error(`Product category not found: ${data.categoryType}`);
    }
}
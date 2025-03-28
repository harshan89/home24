export class CreateProductDTO {
    name: string;
    price: number;
    categoryId: number;
    stockQuantity?: number;
    description?: string;

    constructor(name: string, price: number, categoryId: number, stockQuantity?: number, description?: string) {
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.categoryId = categoryId;
        this.description = description;
    }
}

export class CreateBathroomProductDTO extends CreateProductDTO {
    waterproof: boolean;
    installationType: string;

    constructor(name: string, price: number, categoryId: number, waterproof: boolean, installationType: string, stockQuantity?: number, description?: string) {
        super(name, price, categoryId, stockQuantity, description);
        this.waterproof = waterproof;
        this.installationType = installationType;

    }
}

export class CreateFurnitureProductDTO extends CreateProductDTO {
    material: string;
    weightCapacity: number;
    dimensions: { width: number; height: number; depth: number };

    constructor(name: string, price: number, categoryId: number, material: string, weightCapacity: number, dimensions: { width: number; height: number; depth: number }, stockQuantity?: number, description?: string) {

        super(name, price, categoryId, stockQuantity, description);
        this.material = material;
        this.weightCapacity = weightCapacity;
        this.dimensions = dimensions;
    }
}

export class CreateGardenProductDTO extends CreateProductDTO {
    plantType: string;
    requiresSunlight: boolean;

    constructor(name: string, price: number, categoryId: number, plantType: string, requiresSunlight: boolean, stockQuantity?: number, description?: string) {
        super(name, price, categoryId, stockQuantity, description);
        this.plantType = plantType;
        this.requiresSunlight = requiresSunlight;
    }
}

export class CreateLampProductDTO extends CreateProductDTO {
    wattage: number;
    bulbType: string;
    isDimmable: boolean;

    constructor(name: string, price: number, categoryId: number, wattage: number, bulbType: string, isDimmable: boolean, stockQuantity?: number, description?: string) {
        super(name, price, categoryId, stockQuantity, description);
        this.wattage = wattage;
        this.bulbType = bulbType;
        this.isDimmable = isDimmable;
    }
}

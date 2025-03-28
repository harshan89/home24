export class UpdateProductDTO {
    id: number;
    name?: string;
    price?: number;
    categoryId?: number;
    stockQuantity?: number;
    description?: string;

    constructor(id: number, name?: string, price?: number, categoryId?: number, stockQuantity?: number, description?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.categoryId = categoryId;
        this.stockQuantity = stockQuantity;
        this.description = description;
    }
}

export class UpdateBathroomProductDTO extends UpdateProductDTO {
    waterproof?: boolean;
    installationType?: string;

    constructor(id: number, name?: string, price?: number, categoryId?: number, stockQuantity?: number, description?: string, waterproof?: boolean, installationType?: string) {
        super(id, name, price, categoryId, stockQuantity, description);
        this.waterproof = waterproof;
        this.installationType = installationType;
    }
}

export class UpdateFurnitureProductDTO extends UpdateProductDTO {
    material?: string;
    weightCapacity?: number;
    dimensions?: { width: number; height: number; depth: number };

    constructor(id: number, name?: string, price?: number, categoryId?: number, stockQuantity?: number, description?: string, material?: string, weightCapacity?: number, dimensions?: { width: number; height: number; depth: number }) {
        super(id, name, price, categoryId, stockQuantity, description);
        this.material = material;
        this.weightCapacity = weightCapacity;
        this.dimensions = dimensions;
    }
}

export class UpdateGardenProductDTO extends UpdateProductDTO {
    plantType?: string;
    requiresSunlight?: boolean;

    constructor(id: number, name?: string, price?: number, categoryId?: number, stockQuantity?: number, description?: string, plantType?: string, requiresSunlight?: boolean) {
        super(id, name, price, categoryId, stockQuantity, description);
        this.plantType = plantType;
        this.requiresSunlight = requiresSunlight;
    }
}

export class UpdateLampProductDTO extends UpdateProductDTO {
    wattage?: number;
    bulbType?: string;
    isDimmable?: boolean;

    constructor(id: number, name?: string, price?: number, categoryId?: number, stockQuantity?: number, description?: string, wattage?: number, bulbType?: string, isDimmable?: boolean) {
        super(id, name, price, categoryId, stockQuantity, description);
        this.wattage = wattage;
        this.bulbType = bulbType;
        this.isDimmable = isDimmable;
    }
}
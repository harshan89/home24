export enum CategoryType {
    FURNITURE = "furniture",
    GARDEN = "garden",
    LAMP = "lamp",
    BATHROOM = "bathroom",
    KITCHEN = "kitchen",
    OFFICE = "office",
    DECOR = "decor",
    OUTDOOR = "outdoor"
}

export interface ICategory {
    id: number;
    type: CategoryType;
    name: string;
    parent: number | null;
    description?: string;
    image?: string;
    subCategories?: ICategory[];
}
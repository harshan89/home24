export enum CategoryType {
    FURNITURE = "furniture",
    GARDEN = "garden",
    LAMP = "lamp",
    BATHROOM = "bathroom",
}

export interface ICategory {
    id: number;
    type: CategoryType;
    name: string;
    description?: string;
    image?: string;
}
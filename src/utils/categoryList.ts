import { CategoryType, ICategory } from "@/models/category/ICategory";

export const categoryList: ICategory[] = [
    // Furniture Category
    { id: 1, type: CategoryType.FURNITURE, name: 'Seating', parent: 0 },
    { id: 2, type: CategoryType.FURNITURE, name: 'Chairs', parent: 1 },
    { id: 3, type: CategoryType.FURNITURE, name: 'Office Chairs', parent: 2 },
    { id: 4, type: CategoryType.FURNITURE, name: 'Dining Chairs', parent: 2 },
    { id: 5, type: CategoryType.FURNITURE, name: 'Sofas', parent: 1 },
    { id: 6, type: CategoryType.FURNITURE, name: 'Sectional Sofas', parent: 5 },
    { id: 7, type: CategoryType.FURNITURE, name: 'Loveseats', parent: 5 },
    { id: 8, type: CategoryType.FURNITURE, name: 'Tables', parent: 1 },
    { id: 9, type: CategoryType.FURNITURE, name: 'Coffee Tables', parent: 8 },
    { id: 10, type: CategoryType.FURNITURE, name: 'Dining Tables', parent: 8 },

    // Garden Category
    { id: 11, type: CategoryType.GARDEN, name: 'Plants', parent: 0 },
    { id: 12, type: CategoryType.GARDEN, name: 'Flowers', parent: 11 },
    { id: 13, type: CategoryType.GARDEN, name: 'Roses', parent: 12 },
    { id: 14, type: CategoryType.GARDEN, name: 'Tulips', parent: 12 },
    { id: 15, type: CategoryType.GARDEN, name: 'Trees', parent: 11 },
    { id: 16, type: CategoryType.GARDEN, name: 'Fruit Trees', parent: 15 },
    { id: 17, type: CategoryType.GARDEN, name: 'Shade Trees', parent: 15 },
    { id: 18, type: CategoryType.GARDEN, name: 'Tools', parent: 11 },
    { id: 19, type: CategoryType.GARDEN, name: 'Hand Tools', parent: 18 },
    { id: 20, type: CategoryType.GARDEN, name: 'Power Tools', parent: 18 },

    // Lamp Category
    { id: 21, type: CategoryType.LAMP, name: 'Lighting', parent: 0 },
    { id: 22, type: CategoryType.LAMP, name: 'Ceiling Lights', parent: 21 },
    { id: 23, type: CategoryType.LAMP, name: 'Chandeliers', parent: 22 },
    { id: 24, type: CategoryType.LAMP, name: 'Pendant Lights', parent: 22 },
    { id: 25, type: CategoryType.LAMP, name: 'Lamps', parent: 21 },
    { id: 26, type: CategoryType.LAMP, name: 'Table Lamps', parent: 25 },
    { id: 27, type: CategoryType.LAMP, name: 'Floor Lamps', parent: 25 },
    { id: 28, type: CategoryType.LAMP, name: 'Wall Lights', parent: 21 },
    { id: 29, type: CategoryType.LAMP, name: 'Sconces', parent: 28 },
    { id: 30, type: CategoryType.LAMP, name: 'Swing Arm Lights', parent: 28 },
];

export const formattedCategoryList = () => {
    const categoryMap: Map<number, ICategory> = new Map();
    const formattedList: ICategory[] = [];

    categoryList.forEach(category => {
        categoryMap.set(category.id, { ...category, subCategories: [] });
    });

    categoryList.forEach(category => {
        if (category.parent === 0) {
            formattedList.push(categoryMap.get(category.id)!);
        }
        else {
            const parentCategory = categoryMap.get(category.parent!);
            if (parentCategory) {
                parentCategory.subCategories!.push(categoryMap.get(category.id)!);
            }
        }
    });

    return formattedList;
}

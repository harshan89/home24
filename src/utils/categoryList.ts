import { CategoryType, ICategory } from "@/models/category/ICategory";

export const categoryList: ICategory[] = [
    // Furniture Category
    {
        id: 1,
        type: CategoryType.FURNITURE,
        name: 'Furniture', parent: 0,
        image: "TeamOutlined"
    },
    {
        id: 2, type: CategoryType.FURNITURE,
        name: 'Living Room',
        parent: 1,
    },
    {
        id: 3,
        type: CategoryType.FURNITURE,
        name: 'Chairs',
        parent: 2,
    },
    {
        id: 4,
        type: CategoryType.FURNITURE,
        name: 'Bedroom',
        parent: 1,
    },
    {
        id: 5,
        type: CategoryType.FURNITURE,
        name: 'Bed Frames',
        parent: 4,
    },
    {
        id: 6,
        type: CategoryType.FURNITURE,
        name: 'Nightstands',
        parent: 4,
    },

    // Garden Category
    {
        id: 10, type: CategoryType.GARDEN,
        name: 'Garden', parent: 0,
        image: "SettingOutlined"
    },
    {
        id: 11,
        type: CategoryType.GARDEN,
        name: 'Flowers',
        parent: 10
    },

    // Lamp Category
    {
        id: 20, type: CategoryType.LAMP,
        name: 'Lamp', parent: 0,
        image: "BulbOutlined"
    },
    {
        id: 21,
        type: CategoryType.LAMP,
        name: 'Ceiling Lights',
        parent: 20
    },

];

export const formattedCategoryList = () => {
    return leftMenuTreeFormatter(categoryList)
}

export const leftMenuTreeFormatter = (categoryList: ICategory[]): ICategory[] => {
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

export const getSubCategoryIds = (categoryId: number): number[] => {
    const result: number[] = [];
    const categoryMap: Map<number, ICategory> = new Map();

    categoryList.forEach(category => {
        categoryMap.set(category.id, category);
    });

    const collectSubCategoryIds = (id: number) => {
        categoryList.forEach(category => {
            if (category.parent === id) {
                result.push(category.id);
                collectSubCategoryIds(category.id);
            }
        });
    };

    collectSubCategoryIds(categoryId);
    return result;
};

export const getCategoryDetails = (categoryId: number): ICategory => {
    const category = categoryList.find(cat => cat.id === categoryId);
    if (!category) {
        throw new Error(`Category with id ${categoryId} not found`);
    }

    return category;
}

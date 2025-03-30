import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CategoryType, ICategory } from "@/models/category/ICategory";
import { leftMenuTreeFormatter } from "@/utils/categoryList";

export const defaultCategoryList: ICategory[] = [
  { id: 1, type: CategoryType.FURNITURE, name: "Seating", parent: 0 },
  { id: 2, type: CategoryType.FURNITURE, name: "Chairs", parent: 1 },
];

export const formattedCategoryList = [
  {
    id: 1,
    type: CategoryType.FURNITURE,
    name: "Seating",
    parent: 0,
    subCategories: [
      {
        id: 2,
        type: CategoryType.FURNITURE,
        name: "Chairs",
        parent: 1,
        subCategories: [],
      },
    ],
  },
];

describe("Left tree menu", () => {
  it("Test Left menu Tree creation logic", () => {
    const result = leftMenuTreeFormatter(defaultCategoryList);
    expect(formattedCategoryList).toStrictEqual(result);
  });
});

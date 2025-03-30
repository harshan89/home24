import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CategoryType } from "@/models/category/ICategory";
import LastModifiedProduct from "@/components/LastModifiedProduct";

const product = {
  id: 1,
  name: "Test Product",
  price: 100,
  stockQuantity: 50,
  categoryType: "Electronics",
  category: {
    id: 1,
    name: "Gadgets",
    parent: 1,
    type: CategoryType.BATHROOM,
    description: "description",
  },
  description: "A test product description",
};

describe("Last modified Component", () => {
  it("Render product Details", () => {
    render(<LastModifiedProduct product={product} />);

    expect(screen.getByText("Last Modified Product")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
  });
});

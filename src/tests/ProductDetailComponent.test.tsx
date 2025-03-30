import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CategoryType } from "@/models/category/ICategory";
import ProductDetailComponent from "@/components/ProductDetailComponent";
import BathroomProduct from "@/models/product/bathroomProduct/BathroomProduct";

const product = {
  id: 1,
  name: "Bathroom Product",
  price: 100,
  stockQuantity: 50,
  categoryType: "Bathroom",
  category: {
    id: 1,
    name: "Bathroom Product",
    parent: 1,
    type: CategoryType.BATHROOM,
    description: "description",
  },
  description: "Bathroom product description",
};

const bathroomProduct = new BathroomProduct(
  product.id,
  product.name,
  product.price,
  product.stockQuantity,
  product.categoryType,
  product.category,
  false,
  "",
  product.description
);

describe("Product detail page", () => {
  it("Render product Details", () => {
    render(<ProductDetailComponent product={bathroomProduct} />);

    expect(
      screen.getByText("Bathroom product description")
    ).toBeInTheDocument();
    expect(screen.getByText("Bathroom Product")).toBeInTheDocument();
  });
});

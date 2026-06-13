import { render, screen } from "@testing-library/react";
import MenuGrid from "./MenuGrid";

test("renders dish name", () => {
  render(
    <MenuGrid
      dishes={[
        {
          id: 1,
          name: "Paneer Butter Masala",
          price: "₹250",
          category: "veg"
        }
      ]}
    />
  );

  expect(screen.getByText(/Paneer Butter Masala/i)).toBeInTheDocument();
});
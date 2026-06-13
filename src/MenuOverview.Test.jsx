import { render, screen } from "@testing-library/react";
import MenuOverview from "./MenuOverview";

test("shows Recent Dishes heading", () => {
  render(
    <MenuOverview
      dishes={[]}
      addDish={() => {}}
      deleteDish={() => {}}
    />
  );

  expect(screen.getByText(/Recent Dishes/i)).toBeInTheDocument();
});
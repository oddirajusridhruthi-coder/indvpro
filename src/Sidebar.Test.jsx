import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Sidebar";

test("renders FoodFlow title", () => {
  render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );

  expect(screen.getByText(/FoodFlow/i)).toBeInTheDocument();
});
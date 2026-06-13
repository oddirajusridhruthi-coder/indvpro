import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import MenuOverview from "./MenuOverview";
import MenuGrid from "./MenuGrid";
import Specials from "./Specials";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

function App() {
  const defaultDishes = [
    {
      id: 1,
      name: "Paneer Butter Masala",
      price: "₹250",
      description: "Rich creamy curry",
      category: "veg"
    },
    {
      id: 2,
      name: "Chicken Biryani",
      price: "₹300",
      description: "Hyderabadi style biryani",
      category: "nonveg"
    },
    {
      id: 3,
      name: "Chocolate Cake",
      price: "₹150",
      description: "Delicious dessert slice",
      category: "dessert"
    },
    {
      id: 4,
      name: "Mango Lassi",
      price: "₹120",
      description: "Refreshing summer drink",
      category: "drink"
    }
  ];

  const [dishes, setDishes] = useState(() => {
    const saved = localStorage.getItem("dishes");
    return saved ? JSON.parse(saved) : defaultDishes;
  });

  const [page, setPage] = useState("overview");

  useEffect(() => {
    localStorage.setItem("dishes", JSON.stringify(dishes));
  }, [dishes]);

  const addDish = (newDish) => {
    setDishes((prev) => [...prev, { id: Date.now(), ...newDish }]);
  };

  const deleteDish = (id) => {
    setDishes((prev) => prev.filter((dish) => dish.id !== id));
  };

  return (
    <ErrorBoundary>
      <div className="app-container">
        <Sidebar setPage={setPage} />

        <main className="main-content">
          {page === "overview" && (
            <MenuOverview
              dishes={dishes}
              addDish={addDish}
              deleteDish={deleteDish}
            />
          )}

          {page === "menu" && (
            <MenuGrid dishes={dishes} />
          )}

          {page === "specials" && (
            <Specials
              dishes={dishes}
              deleteDish={deleteDish}
            />
          )}
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
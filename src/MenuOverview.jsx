import { useState } from "react";
import MenuNavbar from "./MenuNavbar";
import DishModal from "./EventModal";

function MenuOverview({ dishes, addDish, deleteDish }) {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = dishes.length;
  const veg = dishes.filter((d) => d.category === "veg").length;
  const nonveg = dishes.filter((d) => d.category === "nonveg").length;
  const desserts = dishes.filter((d) => d.category === "dessert").length;

  return (
    <>
      <MenuNavbar openModal={() => setShowModal(true)} search={search} setSearch={setSearch} />

      <div className="cards">
        <div className="card"><h2>{total}</h2><p>Total Dishes</p></div>
        <div className="card"><h2>{veg}</h2><p>Veg</p></div>
        <div className="card"><h2>{nonveg}</h2><p>Non-Veg</p></div>
        <div className="card"><h2>{desserts}</h2><p>Desserts</p></div>
      </div>

      <div className="dashboard-dishes">
        <h2>Recent Dishes</h2>
        {filteredDishes.length === 0 ? (
          <div className="empty-state">
            <h3>No Dishes Found</h3>
            <p>Add a new dish to get started.</p>
          </div>
        ) : (
          filteredDishes.slice().reverse().map((dish) => (
            <div key={dish.id} className="upcoming-card">
              <div className="card-top">
                <h3>{dish.name}</h3>
                <span className={`badge ${dish.category}`}>{dish.category}</span>
              </div>
              <div className="dish-details">
                <p>💰 {dish.price}</p>
                <p>📖 {dish.description}</p>
              </div>
              <button className="delete-btn" onClick={() => {
                if (window.confirm(`Remove "${dish.name}" ?`)) deleteDish(dish.id);
              }}>🗑 Remove Dish</button>
            </div>
          ))
        )}
      </div>

      {showModal && <DishModal addDish={addDish} onClose={() => setShowModal(false)} />}
    </>
  );
}

export default MenuOverview;

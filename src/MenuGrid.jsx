import vegImg from "./Paneer-Butter-Masala.jpg";
import nonvegImg from "./delicious-chicken-biryani-bowl_632498-25547.jpg";
import dessertImg from "./image-asset.webp";
import drinkImg from "./mango-lassi.jpg";

function MenuGrid({ dishes }) {
  const categories = ["veg", "nonveg", "dessert", "drink"];

  // Fixed images for each category
  const categoryImages = {
    veg: vegImg,
    nonveg: nonvegImg,
    dessert: dessertImg,
    drink: drinkImg
  };

  return (
    <div className="menu-grid">
      <h1>🍴 Menu</h1>

      <div className="grid-wrapper">
        {categories.map((cat) => {
          const catDishes = dishes.filter((d) => d.category === cat);

          return (
            <div key={cat} className="category-block">
              <h2>{cat.toUpperCase()}</h2>

              {/* Always show the category image */}
              <img
                src={categoryImages[cat]}
                alt={cat}
                className="category-image"
              />

              {catDishes.length === 0 ? (
                <p>No dishes in this category</p>
              ) : (
                catDishes.map((dish) => (
                  <div key={dish.id} className={`dish-pill ${dish.category}`}>
                    <strong>{dish.name}</strong> — {dish.price}
                  </div>
                ))
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuGrid;

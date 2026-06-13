function Specials({ dishes, deleteDish }) {
  const sorted = [...dishes].sort((a, b) => a.price.localeCompare(b.price));

  return (
    <div className="specials-container">
      <div className="page-header">
        <h1>⭐ Specials</h1>
        <p>Popular and highlighted dishes</p>
      </div>

      {sorted.length === 0 ? (
        <div className="empty-state">
          <h2>No Dishes Found</h2>
          <p>Add dishes from the overview page.</p>
        </div>
      ) : (
        <div className="dishes-grid">
          {sorted.map((dish) => (
            <div key={dish.id} className="special-card">
              <div className="card-top">
                <h2>{dish.name}</h2>
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
          ))}
        </div>
      )}
    </div>
  );
}

export default Specials;

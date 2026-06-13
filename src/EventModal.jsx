import { useState } from "react";

function DishModal({ addDish, onClose }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Dish name is required");
      return;
    }
    if (isNaN(price) || Number(price) <= 0) {
      alert("Price must be a positive number");
      return;
    }

    addDish({ id: Date.now(), name, price });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h2>🍴 Add New Dish</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Dish Name</label>
          <input
            type="text"
            placeholder="Enter dish name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Price</label>
          <input
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <div className="modal-buttons">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DishModal;

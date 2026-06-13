function MenuNavbar({ openModal, search, setSearch }) {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>🍴 Menu Overview</h1>
        <p>Manage and explore your restaurant dishes</p>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="add-btn" onClick={openModal}>
          + Add Dish
        </button>
      </div>
    </div>
  );
}

export default MenuNavbar;

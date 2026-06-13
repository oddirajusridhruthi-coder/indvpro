export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="logo">
          <div className="logo-icon">🍴</div>
          <h2>FoodFlow</h2>
          <p>Restaurant Menu Suite</p>
        </div>

        <div className="profile-card">
          <div className="avatar">🍔</div>
          <h4>Chef Manager</h4>
          <p>Administrator</p>
        </div>

        <nav className="menu">
          <button onClick={() => setPage("overview")}>🏠 Overview</button>
          <button onClick={() => setPage("menu")}>📋 Menu</button>
          <button onClick={() => setPage("specials")}>⭐ Specials</button>
        </nav>
      </div>

      <div className="sidebar-footer">
        <p>Version 1.0</p>
        <small>Premium Restaurant Menu</small>
      </div>
    </div>
  );
}
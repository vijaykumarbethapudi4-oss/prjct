import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>ShopEase</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="nav-icons">
        <button>🔍</button>
        <button>🛒</button>
        <button>👤</button>
      </div>
    </nav>
  );
}

export default Navbar;
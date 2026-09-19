import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MediaIQ</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>

        <Link to="/articles">Articles</Link>

        <Link to="/articles/create">
          Create Article
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
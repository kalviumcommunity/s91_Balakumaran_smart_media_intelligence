import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>MediaIQ</h3>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
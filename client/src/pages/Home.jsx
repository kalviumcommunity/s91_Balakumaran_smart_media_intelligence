import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h1>MediaIQ</h1>
      <p>
        Content Intelligence and Audience Analytics Platform
      </p>

      <Link to="/dashboard">
        Go to Dashboard
      </Link>
    </div>
  );
}

export default Home;
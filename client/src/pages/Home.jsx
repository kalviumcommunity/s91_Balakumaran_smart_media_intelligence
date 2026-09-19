import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section>
        <h1>MediaIQ</h1>

        <h2>Content Intelligence & Audience Analytics</h2>

        <p>
          MediaIQ helps media organizations manage content,
          understand audience engagement, and analyze article
          performance.
        </p>

        <div>
          <Link to="/articles">
            <button>View Articles</button>
          </Link>

          <Link to="/articles/create">
            <button>Create Article</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
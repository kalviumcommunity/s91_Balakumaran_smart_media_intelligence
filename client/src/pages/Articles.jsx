import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getArticles,
  deleteArticle,
} from "../services/articleService";

function Articles() {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadArticles = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await getArticles();

      setArticles(result.data || []);
    } catch (error) {
      console.error("Error loading articles:", error);

      setError(
        error.response?.data?.message ||
          "Unable to load articles"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this article?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteArticle(id);

      // Remove deleted article from the screen
      setArticles((currentArticles) =>
        currentArticles.filter(
          (article) => article._id !== id
        )
      );

      alert("Article deleted successfully");
    } catch (error) {
      console.error("Error deleting article:", error);

      alert(
        error.response?.data?.message ||
          "Failed to delete article"
      );
    }
  };

  if (loading) {
    return (
      <div>
        <h1>Articles</h1>
        <p>Loading articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Articles</h1>

        <p>{error}</p>

        <button onClick={loadArticles}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>MediaIQ Articles</h1>

        <button
          onClick={() => navigate("/articles/create")}
        >
          + Create Article
        </button>
      </div>

      {articles.length === 0 ? (
        <div>
          <p>No articles found.</p>

          <button
            onClick={() => navigate("/articles/create")}
          >
            Create Your First Article
          </button>
        </div>
      ) : (
        <div>
          {articles.map((article) => (
            <div key={article._id}>
              <h2>{article.title}</h2>

              <p>
                {article.summary ||
                  "No summary available."}
              </p>

              <p>
                <strong>Author:</strong>{" "}
                {article.author?.username ||
                  "Unknown"}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {article.author?.email ||
                  "Not available"}
              </p>

              <p>
                <strong>Category:</strong>{" "}
                {article.category?.name ||
                  "Uncategorized"}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {article.status}
              </p>

              {article.publishedAt && (
                <p>
                  <strong>Published:</strong>{" "}
                  {new Date(
                    article.publishedAt
                  ).toLocaleDateString()}
                </p>
              )}

              <div>
                <button
                  onClick={() =>
                    navigate(
                      `/articles/edit/${article._id}`
                    )
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(article._id)
                  }
                >
                  Delete
                </button>
              </div>

              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Articles;
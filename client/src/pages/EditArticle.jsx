import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getArticleById,
  updateArticle,
} from "../services/articleService";

function EditArticle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    summary: "",
    status: "draft",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Load article when the page opens
  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await getArticleById(id);

        const article = result.data;

        setFormData({
          title: article.title || "",
          content: article.content || "",
          summary: article.summary || "",
          status: article.status || "draft",
        });
      } catch (error) {
        console.error(
          "Error loading article:",
          error
        );

        setError(
          error.response?.data?.message ||
            "Unable to load article"
        );
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id]);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  // Submit updated article
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");

      await updateArticle(id, formData);

      alert("Article updated successfully");

      // Go back to articles page
      navigate("/articles");
    } catch (error) {
      console.error(
        "Error updating article:",
        error
      );

      setError(
        error.response?.data?.message ||
          "Failed to update article"
      );
    } finally {
      setSaving(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div>
        <h1>Edit Article</h1>
        <p>Loading article...</p>
      </div>
    );
  }

  // Error state
  if (error && !formData.title) {
    return (
      <div>
        <h1>Edit Article</h1>

        <p>{error}</p>

        <button
          onClick={() => navigate("/articles")}
        >
          Back to Articles
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Edit Article</h1>

      {error && (
        <p>{error}</p>
      )}

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label htmlFor="title">
            Title
          </label>

          <br />

          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        {/* Summary */}
        <div>
          <label htmlFor="summary">
            Summary
          </label>

          <br />

          <input
            id="summary"
            type="text"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Content */}
        <div>
          <label htmlFor="content">
            Content
          </label>

          <br />

          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="10"
            required
          />
        </div>

        <br />

        {/* Status */}
        <div>
          <label htmlFor="status">
            Status
          </label>

          <br />

          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="draft">
              Draft
            </option>

            <option value="published">
              Published
            </option>

            <option value="archived">
              Archived
            </option>
          </select>
        </div>

        <br />

        {/* Buttons */}
        <div>
          <button
            type="submit"
            disabled={saving}
          >
            {saving
              ? "Saving..."
              : "Update Article"}
          </button>

          <button
            type="button"
            onClick={() =>
              navigate("/articles")
            }
            disabled={saving}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditArticle;
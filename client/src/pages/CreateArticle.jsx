import { useState } from "react";
import { createArticle } from "../services/articleService";

function CreateArticle() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    summary: "",
    author: "",
    category: "",
    status: "draft",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createArticle(formData);

      setMessage("Article created successfully!");

      setFormData({
        title: "",
        content: "",
        summary: "",
        author: "",
        category: "",
        status: "draft",
      });
    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.message || "Failed to create article"
      );
    }
  };

  return (
    <div>
      <h1>Create Article</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Summary</label>
          <input
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Author ID</label>
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Category ID</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Status</label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <button type="submit">Create Article</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateArticle;
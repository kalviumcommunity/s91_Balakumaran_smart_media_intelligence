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

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("content", formData.content);
      data.append("summary", formData.summary);
      data.append("author", formData.author);
      data.append("category", formData.category);
      data.append("status", formData.status);

      if (image) {
        data.append("image", image);
      }

      await createArticle(data);

      setMessage("Article created successfully!");

      setFormData({
        title: "",
        content: "",
        summary: "",
        author: "",
        category: "",
        status: "draft",
      });

      setImage(null);
    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.message ||
          "Failed to create article"
      );
    }
  };

  return (
    <div>
      <h1>Create Article</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>

          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="summary">Summary</label>

          <input
            id="summary"
            type="text"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="content">Content</label>

          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="author">
            Author ID
          </label>

          <input
            id="author"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="category">
            Category ID
          </label>

          <input
            id="category"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="image">
            Article Image
          </label>

          <input
            id="image"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleImageChange}
          />
        </div>

        <div>
          <label htmlFor="status">
            Status
          </label>

          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="draft">Draft</option>
            <option value="published">
              Published
            </option>
            <option value="archived">
              Archived
            </option>
          </select>
        </div>

        <button type="submit">
          Create Article
        </button>
      </form>
       
       {message && <p>{message}</p>}
    </div>
  );
}

export default CreateArticle;
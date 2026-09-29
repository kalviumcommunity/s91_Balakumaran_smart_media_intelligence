import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const result = await loginUser(formData);

      // Store JWT token
      localStorage.setItem(
        "mediaiq_token",
        result.token
      );

      // Store logged-in user
      localStorage.setItem(
        "mediaiq_user",
        JSON.stringify(result.data)
      );

      setMessage("Login successful!");

      navigate("/articles");
    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
    <div>
      <h1>MediaIQ Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">
          Login
        </button>
      </form>

      {message && <p>{message}</p>}
      <button
  type="button"
  onClick={() => {
    window.location.href =
      "http://localhost:5000/api/auth/google";
  }}
>
  Continue with Google
</button>
    </div>
  );
}

export default Login;
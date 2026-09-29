import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const token = params.get("token");

    if (token) {
      localStorage.setItem(
        "mediaiq_token",
        token
      );

      navigate("/articles");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Signing you in...</h1>
    </div>
  );
}

export default AuthSuccess;
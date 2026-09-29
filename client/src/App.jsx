import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import CreateArticle from "./pages/CreateArticle";
import EditArticle from "./pages/EditArticle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthSuccess from "./pages/AuthSuccess";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/articles"
            element={<Articles />}
          />

          <Route
            path="/articles/create"
            element={<CreateArticle />}
          />

          <Route
            path="/articles/edit/:id"
            element={<EditArticle />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
  path="/auth-success"
  element={<AuthSuccess />}
/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>MediaIQ</h1>
        <p>Content Intelligence & Audience Analytics Platform</p>
      </header>

      <main className="app-main">
        <section className="welcome-section">
          <h2>Welcome to MediaIQ</h2>
          <p>
            A content intelligence platform designed for media organizations
            to manage content and understand audience engagement.
          </p>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
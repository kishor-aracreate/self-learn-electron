// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/page-1";
import Page2 from "./pages/page-2";
import Page3 from "./pages/page-3";

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
        <Link to="/page1" style={{ marginRight: "1rem" }}>
          Page 1
        </Link>
        <Link to="/page2" style={{ marginRight: "1rem" }}>
          Page 2
        </Link>
        <Link to="/page3">Page 3</Link>
      </nav>

      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="*" element={<Page1 />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;

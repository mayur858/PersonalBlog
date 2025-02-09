import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/homepage";
import BlogList from "./Pages/bloglistpage";
import AboutPage from "./Pages/aboutpage.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/about-page" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

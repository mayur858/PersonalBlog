import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/homepage";
import BlogList from "./Pages/bloglistpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog-list" element={<BlogList />} />
      </Routes>
    </Router>
  );
}

export default App;

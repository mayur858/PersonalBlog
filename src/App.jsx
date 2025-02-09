import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/homepage";
import BlogList from "./Pages/bloglistpage";
import AboutPage from "./Pages/aboutpage.jsx";
import BlogPost from "./Pages/blogpostpage"; // Import the BlogPost component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/post/:id" element={<BlogPost />} /> {/* Add route for individual post */}
      </Routes>
    </Router>
  );
}

export default App;

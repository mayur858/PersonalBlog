import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to my Personal Blog Website</h1>
      <p className="mt-4 text-lg text-gray-600">Sharing thoughts, ideas, and experiences.</p>
      <button 
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        onClick={() => navigate('/blog-list')}
      >
        Read My Blog
      </button>
    </div>
  );
}

export default Homepage;

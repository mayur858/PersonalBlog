import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link to navigate to individual blog posts

function BlogList() {
  const [posts, setPosts] = useState([]); // State to store the list of blog posts
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch all blog posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/posts");
        const data = await response.json();
        console.log("Fetched posts:", data); // Check what data is returned
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };
  
    fetchPosts();
  }, []);   
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Blog List</h1>
      <p className="mt-4 text-lg text-gray-600">
        Here are some of my latest blog posts:
      </p>

      {/* Display the list of posts */}
      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">
              {new Date(post.created_at).toLocaleDateString()}
            </p>
            <Link
              to={`/post/${post.id}`} // Link to the individual blog post
              className="text-2xl font-bold text-gray-800 hover:text-blue-600"
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the post ID from URL

function BlogPost() {
  const { id } = useParams(); // Get the ID from the URL
  const [post, setPost] = useState(null); // State to store the full post
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch single blog post
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/posts/${id}`);
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      {post && (
        <>
          <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
          <p className="text-sm text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
          <div className="mt-4 text-gray-700">
            <p>{post.content}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default BlogPost;

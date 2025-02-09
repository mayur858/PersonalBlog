// backend/src/controllers/postsController.js
const pool = require("../db");

// Get all blog posts
const getAllPosts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM blog_posts ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching blog posts:", err);
    res.status(500).json({ error: "Failed to fetch blog posts" });
  }
};

// Get a single blog post by ID
const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM blog_posts WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching the blog post:", err);
    res.status(500).json({ error: "Failed to fetch blog post" });
  }
};

// Create a new blog post
const createPost = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO blog_posts (title, content, author) VALUES ($1, $2, $3) RETURNING *",
      [title, content, author]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating blog post:", err);
    res.status(500).json({ error: "Failed to create blog post" });
  }
};

// Update a blog post
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  try {
    const result = await pool.query(
      "UPDATE blog_posts SET title = $1, content = $2, author = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *",
      [title, content, author, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error updating blog post:", err);
    res.status(500).json({ error: "Failed to update blog post" });
  }
};

// Delete a blog post
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM blog_posts WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error("Error deleting blog post:", err);
    res.status(500).json({ error: "Failed to delete blog post" });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};

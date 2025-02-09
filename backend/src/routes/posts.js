// backend/src/routes/posts.js
const express = require("express");
const postsController = require("../controllers/postController");

const router = express.Router();

// Get all blog posts
router.get("/", postsController.getAllPosts);

// Get a single blog post by ID
router.get("/:id", postsController.getPostById);

// Create a new blog post
router.post("/", postsController.createPost);

// Update a blog post
router.put("/:id", postsController.updatePost);

// Delete a blog post
router.delete("/:id", postsController.deletePost);

module.exports = router;

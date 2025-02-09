// backend/src/server.js
const express = require("express");
const dotenv = require("dotenv");
const postsRoute = require("./routes/posts");
const cors = require("cors"); 

dotenv.config(); // Load environment variables

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json()); // Parse incoming JSON data
app.use("/api/posts", postsRoute); // Use the posts route

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

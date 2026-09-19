require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const articleRoutes = require("./routes/articleRoutes");

const categoryRoutes = require("./routes/categoryRoutes");


const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Connect article routes
app.use("/api/articles", articleRoutes);
app.use("/api/categories", categoryRoutes);


app.get("/", (req, res) => {
  res.send("MediaIQ API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
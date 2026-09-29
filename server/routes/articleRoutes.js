const express = require("express");

const {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.get("/", getArticles);
router.get("/:id", getArticleById);

// Protected routes
router.post("/", protect, createArticle);
router.put("/:id", protect, updateArticle);
router.delete("/:id", protect, deleteArticle);

module.exports = router;
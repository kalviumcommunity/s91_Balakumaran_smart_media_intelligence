const express = require("express");

const {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");

const protect = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// Public routes
router.get("/", getArticles);

// GET single article
router.get("/:id", getArticleById);

// POST article with image upload
router.post("/", protect, upload.single("image"), createArticle);

// PUT article
router.put("/:id", protect, updateArticle);

// DELETE article
router.delete("/:id", protect, deleteArticle);

module.exports = router;
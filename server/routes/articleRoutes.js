const express = require("express");

const {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
} = require("../controllers/articleController");

const router = express.Router();

router.get("/", getArticles);
router.get("/:id", getArticleById);

router.post("/", createArticle);
router.put("/:id", updateArticle);

module.exports = router;
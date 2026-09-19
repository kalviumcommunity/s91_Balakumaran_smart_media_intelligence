const express = require("express");

const {
  getArticles,
  getArticleById,
  createArticle,
} = require("../controllers/articleController");

const router = express.Router();

router.get("/", getArticles);
router.get("/:id", getArticleById);

router.post("/", createArticle);

module.exports = router;
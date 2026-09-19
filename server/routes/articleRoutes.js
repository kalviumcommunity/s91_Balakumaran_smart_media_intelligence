const express = require("express");

const {
  getArticles,
  getArticleById,
} = require("../controllers/articleController");

const router = express.Router();

router.get("/", getArticles);
router.get("/:id", getArticleById);

module.exports = router;
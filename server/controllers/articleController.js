const Article = require("../models/Article");
const User = require("../models/User");
const Category = require("../models/Category");

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find()
      .populate("author", "username email")
      .populate("category", "name");

    res.status(200).json({
      success: true,
      count: articles.length,
      data: articles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id)
      .populate("author", "username email")
      .populate("category", "name");

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    res.status(200).json({
      success: true,
      data: article,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const createArticle = async (req, res) => {
  try {
    const {
      title,
      content,
      summary,
      author,
      category,
      imageUrl,
      status,
      publishedAt,
    } = req.body;

    const article = await Article.create({
      title,
      content,
      summary,
      author,
      category,
      imageUrl,
      status,
      publishedAt,
    });

    res.status(201).json({
      success: true,
      message: "Article created successfully",
      data: article,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  getArticles,
  getArticleById,
  createArticle,
};
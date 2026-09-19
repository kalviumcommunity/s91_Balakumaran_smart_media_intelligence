require("dotenv").config();

const connectDB = require("./config/db");

const User = require("./models/User");
const Category = require("./models/Category");
const Article = require("./models/Article");
const Engagement = require("./models/Engagement");
const Analytics = require("./models/Analytics");

const runDatabaseOperations = async () => {
  try {
    await connectDB();

    console.log("Starting database operations...");

    // CREATE
const category = await Category.create({
  name: `Technology_${Date.now()}`,
  description: "Technology related articles",
});

    console.log("Category created:", category);

    // READ
    const categories = await Category.find();

    console.log("Categories found:", categories);

    // CREATE USER
 const user = await User.create({
  username: `demo_user_${Date.now()}`,
  email: `demo_${Date.now()}@example.com`,
  password: "demo_password",
  role: "editor",
});

    console.log("User created:", user);

    // CREATE ARTICLE
    const article = await Article.create({
      title: "Introduction to Media Intelligence",
      content: "This is a sample article for database testing.",
      summary: "A sample MediaIQ article.",
      author: user._id,
      category: category._id,
      status: "draft",
    });

    console.log("Article created:", article);

    // READ ARTICLE
    const articles = await Article.find()
      .populate("author")
      .populate("category");

    console.log("Articles found:", articles);

    // UPDATE ARTICLE
    const updatedArticle = await Article.findByIdAndUpdate(
      article._id,
      {
        status: "published",
        publishedAt: new Date(),
      },
      { new: true }
    );

    console.log("Article updated:", updatedArticle);

    // DELETE ARTICLE
    // await Article.findByIdAndDelete(article._id);

    // console.log("Article deleted successfully");

    console.log("Database operations completed successfully.");

    process.exit(0);
  } catch (error) {
    console.error("Database operation failed:", error.message);
    process.exit(1);
  }
};

runDatabaseOperations();
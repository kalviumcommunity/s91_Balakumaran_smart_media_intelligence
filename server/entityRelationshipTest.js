require("dotenv").config();

const connectDB = require("./config/db");

const User = require("./models/User");
const Category = require("./models/Category");
const Article = require("./models/Article");
const Engagement = require("./models/Engagement");
const Analytics = require("./models/Analytics");

const testRelationships = async () => {
  try {
    await connectDB();

    console.log("Testing entity relationships...");

    // Create User
    const user = await User.create({
      username: `relationship_user_${Date.now()}`,
      email: `relationship_${Date.now()}@example.com`,
      password: "test_password",
      role: "editor",
    });

    // Create Category
    const category = await Category.create({
      name: `Relationship_Category_${Date.now()}`,
      description: "Category for relationship testing",
    });

    // Create Article connected to User and Category
    const article = await Article.create({
      title: "Entity Relationship Test Article",
      content: "Testing relationships between MediaIQ entities.",
      summary: "Relationship testing article",
      author: user._id,
      category: category._id,
      status: "published",
      publishedAt: new Date(),
    });

    // Create Engagement connected to Article and User
    const engagement = await Engagement.create({
      article: article._id,
      user: user._id,
      views: 100,
      likes: 25,
      comments: 10,
      shares: 5,
      readingTime: 180,
    });

    // Create Analytics connected to Article
    const analytics = await Analytics.create({
      article: article._id,
      totalViews: 100,
      uniqueViews: 80,
      engagementRate: 40,
      averageReadingTime: 180,
      bounceRate: 20,
    });

    console.log("User created:", user._id);
    console.log("Category created:", category._id);
    console.log("Article created:", article._id);
    console.log("Engagement created:", engagement._id);
    console.log("Analytics created:", analytics._id);

    // Retrieve Article with related User and Category
    const populatedArticle = await Article.findById(article._id)
      .populate("author", "username email role")
      .populate("category", "name description");

    console.log("\nPopulated Article:");
    console.log(populatedArticle);

    // Retrieve Engagement with related Article and User
    const populatedEngagement = await Engagement.findById(engagement._id)
      .populate("article", "title status")
      .populate("user", "username email");

    console.log("\nPopulated Engagement:");
    console.log(populatedEngagement);

    // Retrieve Analytics with related Article
    const populatedAnalytics = await Analytics.findById(analytics._id)
      .populate("article", "title status");

    console.log("\nPopulated Analytics:");
    console.log(populatedAnalytics);

    console.log("\nEntity relationships working successfully!");

    process.exit(0);
  } catch (error) {
    console.error("Relationship test failed:", error.message);
    process.exit(1);
  }
};

testRelationships();
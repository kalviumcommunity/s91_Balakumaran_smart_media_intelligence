const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema(
  {
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
      required: true,
    },

    totalViews: {
      type: Number,
      default: 0,
    },

    uniqueViews: {
      type: Number,
      default: 0,
    },

    engagementRate: {
      type: Number,
      default: 0,
    },

    averageReadingTime: {
      type: Number,
      default: 0,
    },

    bounceRate: {
      type: Number,
      default: 0,
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Analytics", analyticsSchema);
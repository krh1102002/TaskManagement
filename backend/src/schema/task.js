const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    startupName: {
      type: String,
      required: true,
      trim: true,
    },
    incorporationDate: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    founderName: {
      type: String,
      required: true,
      trim: true,
    },
    industry: {
      type: String,
      enum: [
        "IT services",
        "agriculture",
        "biotechnologies",
        "Design",
        "Fashion",
        "Green Technologies",
        "Marketing",
        "Others",
      ],
    },
    sector: {
      type: String,
      enum: [
        "IT consultancy",
        "IT management",
        "IT services",
        "agri tech",
        "agriculture chemicals",
        "organic agriculture",
        "web design",
        "fashion technologies",
        "Others",
      ],
    },
    businessIdea: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tasks", taskSchema);

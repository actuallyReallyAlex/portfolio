import mongoose from "mongoose";

import { PortfolioItemDocument } from "../types";

const portfolioItemSchema = new mongoose.Schema(
  {
    content: {
      required: [true, "Field 'content' is required."],
      type: String,
    },
    images: {
      additional: {
        required: false,
        type: [String],
      },
      cover: {
        required: false,
        type: String,
      },
    },
    links: {
      demo: {
        required: false,
        type: String,
      },
      github: {
        required: false,
        type: String,
      },
      npm: {
        required: false,
        type: String,
      },
    },
    tagline: {
      required: [true, "Field 'tagline' is required."],
      type: String,
    },
    title: {
      required: [true, "Field 'title' is required."],
      type: String,
    },
  },
  { timestamps: true }
);

const PortfolioItem = mongoose.model<PortfolioItemDocument>(
  "PortfolioItem",
  portfolioItemSchema
);

export default PortfolioItem;

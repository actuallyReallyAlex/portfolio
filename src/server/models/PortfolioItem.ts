import mongoose from "mongoose";

import { PortfolioItemDocument } from "../types";

const portfolioItemSchema = new mongoose.Schema(
  {
    content: {
      required: [true, "Field 'content' is required."],
      type: String,
    },
    coverImage: {
      buffer: {
        required: [true, "Field 'coverImage.buffer' is required."],
        type: Buffer,
      },
      name: {
        required: [true, "Field 'coverImage.name' is required."],
        type: String,
      },
      size: {
        required: [true, "Field 'coverImage.size' is required."],
        type: Number,
      },
      type: {
        required: [true, "Field 'coverImage.type' is required."],
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

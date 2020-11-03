import mongoose from "mongoose";

import { PortfolioItemDocument } from "../types";

const portfolioItemSchema = new mongoose.Schema(
  {
    content: {
      required: [true, "Field 'content' is required."],
      type: String,
    },
    coverImage: {
      required: [true, "Field 'coverImage' is required."],
      type: String,
    },
    iconBackground: {
      required: [true, "Field 'iconBackground' is required."],
      type: String,
    },
    iconClass: {
      required: [true, "Field 'iconClass' is required."],
      type: String,
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

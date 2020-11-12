import mongoose from "mongoose";

import { CoverImageDocument } from "../types";

const coverImageSchema = new mongoose.Schema(
  {
    base64: {
      required: [true, "Field 'base64' is required."],
      type: String,
    },
    filename: {
      required: [true, "Field 'filename' is required."],
      type: String,
    },
    portfolioItemId: {
      required: [true, "Field 'portfolioItemId' is required."],
      type: String,
    },
  },
  { timestamps: true }
);

const CoverImage = mongoose.model<CoverImageDocument>(
  "CoverImage",
  coverImageSchema
);

export default CoverImage;

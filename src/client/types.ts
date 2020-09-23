import { Document } from "mongoose";

export interface PortfolioItem {
  content: string;
  images?: {
    additional: string[];
    cover: string;
  };
  links?: {
    demo?: string;
    github?: string;
    npm?: string;
  };
  tagline: string;
  title: string;
}

export interface PortfolioItemDocument extends Document {
  content: string;
  images?: {
    additional: string[];
    cover: string;
  };
  links?: {
    demo?: string;
    github?: string;
    npm?: string;
  };
  tagline: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  __v: number;
}

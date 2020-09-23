import { Request, Router } from "express";
import { Document } from "mongoose";

export type Controller = {
  router: Router;
};

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
  createdAt: string;
  updatedAt: string;
  _id: string;
  __v: number;
}

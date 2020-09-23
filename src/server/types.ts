import { Request, Router } from "express";

export type Controller = {
  router: Router;
};

export interface PortfolioItem {
  content: string;
  links?: {
    demo?: string;
    github?: string;
    npm?: string;
  };
  images?: {
    additional: string[];
    cover: string;
  };
  tagline: string;
  title: string;
}

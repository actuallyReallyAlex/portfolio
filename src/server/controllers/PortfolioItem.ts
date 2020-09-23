import express, { Request, Response, Router } from "express";
import path from "path";
import PortfolioItemModel from "../models/PortfolioItem";

import { PortfolioItem } from "../types";

class PortfolioItemController {
  public router: Router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(
      "/portfolioItems",
      async (req: Request, res: Response): Promise<Response<any>> => {
        try {
          const mockPortfolioItems: PortfolioItem[] = [
            {
              content: "This project is cool.",
              tagline: "This is a super cool project.",
              title: "The Cool Project",
            },
            {
              content: "This project is lame.",
              tagline: "This is a super lame project.",
              title: "The Lame Project",
            },
            {
              content: "This project is blue.",
              tagline: "This is a super blue project.",
              title: "The Blue Project",
            },
          ];

          return res.send(mockPortfolioItems);
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );

    this.router.post(
      "/portfolioItem",
      async (req: Request, res: Response): Promise<Response<any>> => {
        try {
          const newPortfolioItem = new PortfolioItemModel(req.body);

          await newPortfolioItem.save();

          return res.send(newPortfolioItem);
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );
  }
}

export default PortfolioItemController;

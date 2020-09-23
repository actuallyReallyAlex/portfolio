import express, { Request, Response, Router } from "express";
import path from "path";

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
          return res.send("Hello, from Server! :)");
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );
  }
}

export default PortfolioItemController;

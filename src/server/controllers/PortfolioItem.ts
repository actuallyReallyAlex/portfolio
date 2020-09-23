import express, { Request, Response, Router } from "express";
import PortfolioItemModel from "../models/PortfolioItem";

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
          const portfolioItemDocuments = await PortfolioItemModel.find({});

          return res.send(portfolioItemDocuments);
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

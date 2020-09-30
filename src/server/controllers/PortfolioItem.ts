import express, { Request, Response, Router } from "express";
import multer from "multer";

import PortfolioItemModel from "../models/PortfolioItem";
import { PortfolioItem } from "../types";

class PortfolioItemController {
  public router: Router = express.Router();

  private parseFile = multer({
    limits: {
      fileSize: 1000000,
    },
    // fileFilter: (req: express.Request, file: any, cb: Function) => {
    //   // if (!file.originalname.match(/\.(csv)$/)) {
    //   //   return cb(new Error('File must be a .csv file.'));
    //   // }

    //   return cb(undefined, true);
    // },
  });

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
      this.parseFile.single("file"),
      async (req: Request, res: Response): Promise<Response<any>> => {
        try {
          const newItemData: PortfolioItem = {
            ...req.body,
            coverImage: {
              buffer: req.file.buffer,
              name: req.file.originalname,
              size: req.file.size,
              type: req.file.mimetype,
            },
          };
          const newPortfolioItem = new PortfolioItemModel(newItemData);

          await newPortfolioItem.save();

          return res.status(201).send(newPortfolioItem);
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );
  }
}

export default PortfolioItemController;

import express, { Request, Response, Router } from "express";
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

import PortfolioItemModel from "../models/PortfolioItem";
import { PortfolioItem } from "../types";

class PortfolioItemController {
  public router: Router = express.Router();

  private parseFile = multer({
    fileFilter: (req: express.Request, file: any, cb: Function) => {
      if (
        !file.originalname.match(/\.(png)$/) &&
        !file.originalname.match(/\.(jpg)$/) &&
        !file.originalname.match(/\.(jpeg)$/)
      ) {
        return cb(
          new Error(
            "File must be in one of the following formats: [.png, .jpg, .jpeg]."
          )
        );
      }

      return cb(undefined, true);
    },
    limits: {
      fileSize: 1000000,
    },
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../uploads"));
      },
      filename: function (req, file, cb) {
        cb(null, `${uuidv4()}.${file.originalname.split(".")[1]}`);
      },
    }),
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
          const { content, links, tagline, title } = req.body;
          const newItemData: PortfolioItem = {
            content,
            coverImage: `/uploads/${req.file.filename}`,
            links: JSON.parse(links),
            tagline,
            title,
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

    this.router.patch(
      "/portfolioItem",
      this.parseFile.single("file"),
      async (req: Request, res: Response): Promise<Response<any>> => {
        try {
          const { content, id, links, tagline, title } = req.body;
          const correspondingPortfolioItem = await PortfolioItemModel.findById(
            id
          );
          if (!correspondingPortfolioItem) {
            return res
              .status(404)
              .send({ error: "No corresponding PortfolioItem found!" });
          }

          const updateFieldNames = Object.keys(req.body);

          if (
            req.body.title &&
            req.body.title !== correspondingPortfolioItem.title
          ) {
            correspondingPortfolioItem.title = req.body.title;
          }

          if (
            req.body.tagline &&
            req.body.tagline !== correspondingPortfolioItem.tagline
          ) {
            correspondingPortfolioItem.tagline = req.body.tagline;
          }

          if (
            req.body.links && req.body.links.demo &&
            correspondingPortfolioItem.links &&
            req.body.links.demo !== correspondingPortfolioItem.links.demo
          ) {
            correspondingPortfolioItem.links.demo = req.body.links.demo;
          }

          if (
            req.body.links && req.body.links.github &&
            correspondingPortfolioItem.links &&
            req.body.links.github !== correspondingPortfolioItem.links.github
          ) {
            correspondingPortfolioItem.links.github = req.body.links.github;
          }

          if (
            req.body.links && req.body.links.npm &&
            correspondingPortfolioItem.links &&
            req.body.links.npm !== correspondingPortfolioItem.links.npm
          ) {
            correspondingPortfolioItem.links.npm = req.body.links.npm;
          }

          // TODO - Implement CoverImage modification

          if (
            req.body.content &&
            req.body.content !== correspondingPortfolioItem.content
          ) {
            correspondingPortfolioItem.content = req.body.content;
          }

          await correspondingPortfolioItem.save();

          return res.send(correspondingPortfolioItem);
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );
  }
}

export default PortfolioItemController;

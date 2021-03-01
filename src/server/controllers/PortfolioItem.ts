import express, { Request, Response, Router } from "express";
import multer, { FileFilterCallback } from "multer";
import validator from "validator";

import CoverImageModel from "../models/CoverImage";
import PortfolioItemModel from "../models/PortfolioItem";

import {
  ErrorResponse,
  PortfolioItemDocument,
  PortfolioItemModifyResponse,
  SuccessResponsePortfolioItemPOST,
} from "../types";

class PortfolioItemController {
  public router: Router = express.Router();

  private parseFile = multer({
    fileFilter: (
      req: express.Request,
      file: Express.Multer.File,
      cb: FileFilterCallback
    ) => {
      if (
        !file.originalname.match(/\.(png)$/) &&
        !file.originalname.match(/\.(jpg)$/) &&
        !file.originalname.match(/\.(jpeg)$/) &&
        !file.originalname.match(/\.(webp)$/)
      ) {
        return cb(
          new Error(
            "File must be in one of the following formats: [.png, .jpg, .jpeg, .webp]."
          )
        );
      }

      return cb(null, true);
    },
    limits: {
      fileSize: 5000000,
    },
    storage: multer.memoryStorage(),
  });

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(
      "/portfolioItems",
      async (
        req: Request,
        res: Response
      ): Promise<Response<ErrorResponse | PortfolioItemDocument[]>> => {
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
      async (
        req: Request,
        res: Response
      ): Promise<
        Response<ErrorResponse | SuccessResponsePortfolioItemPOST>
      > => {
        try {
          const {
            content,
            iconBackground,
            iconClass,
            links,
            tagline,
            title,
          } = req.body;

          if (!content || !iconBackground || !iconClass || !tagline || !title) {
            return res.status(400).send({ error: "Form incomplete!" });
          }

          const newPortfolioItem = new PortfolioItemModel({
            content,
            iconBackground,
            iconClass,
            links: JSON.parse(links),
            tagline,
            title,
          });

          await newPortfolioItem.save();

          const newCoverImage = new CoverImageModel({
            base64: req.file.buffer.toString("base64"),
            filename: req.file.originalname,
            portfolioItemId: newPortfolioItem.id,
          });

          await newCoverImage.save();

          return res.status(201).send({
            coverImage: newCoverImage,
            notificationMessage: `${newPortfolioItem.title} was created successfully!`,
            portfolioItem: newPortfolioItem,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );

    // TODO - Implement CoverImage modification
    this.router.patch(
      "/portfolioItem",
      this.parseFile.single("file"),
      async (
        req: Request,
        res: Response
      ): Promise<Response<ErrorResponse | PortfolioItemModifyResponse>> => {
        try {
          const correspondingPortfolioItem = await PortfolioItemModel.findById(
            req.body.id
          );
          if (!correspondingPortfolioItem) {
            return res
              .status(404)
              .send({ error: "No corresponding PortfolioItem found!" });
          }

          const updateFieldNames = Object.keys(req.body);

          updateFieldNames.forEach((field) => {
            if (req.body[field] !== correspondingPortfolioItem.get(field)) {
              correspondingPortfolioItem.set(field, req.body[field]);
            }
          });

          await correspondingPortfolioItem.save();

          const portfolioItems = await PortfolioItemModel.find({});

          return res.send({
            notificationMessage: `${correspondingPortfolioItem.title} was modified successfully!`,
            portfolioItem: correspondingPortfolioItem,
            portfolioItems,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );

    this.router.delete(
      "/portfolioItem",
      async (
        req: Request,
        res: Response
      ): Promise<Response<ErrorResponse | PortfolioItemModifyResponse>> => {
        try {
          const { id } = req.body;

          if (!id.match(/^[a-f\d]{24}$/i)) {
            return res.status(400).send({ error: "Incorrect id format." });
          }

          const item = await PortfolioItemModel.findOneAndDelete({
            _id: validator.trim(id),
          });

          if (!item) {
            return res
              .status(404)
              .send({ error: "No corresponding PortfolioItem found!" });
          }

          // * Delete CoverImage
          const coverImage = await CoverImageModel.findOneAndDelete({
            portfolioItemId: validator.trim(id),
          });

          if (!coverImage) {
            return res
              .status(500)
              .send({ error: "Could not delete corresponding CoverImage!" });
          }

          const portfolioItems = await PortfolioItemModel.find({});

          return res.send({
            notificationMessage: `${item.title} was removed successfully!`,
            portfolioItem: item,
            portfolioItems,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );
  }
}

export default PortfolioItemController;

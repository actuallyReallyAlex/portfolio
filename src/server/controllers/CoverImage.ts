import express, { Request, Response, Router } from "express";
import multer, { FileFilterCallback } from "multer";
import validator from "validator";

import CoverImageModel from "../models/CoverImage";

import {
  CoverImageDeleteResponse,
  CoverImageDocument,
  ErrorResponse,
  SuccessResponseCoverImagePOST,
} from "../types";

class CoverImageController {
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
        !file.originalname.match(/\.(jpeg)$/)
      ) {
        return cb(
          new Error(
            "File must be in one of the following formats: [.png, .jpg, .jpeg]."
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
      "/coverImage",
      async (
        req: Request,
        res: Response
      ): Promise<Response<ErrorResponse | CoverImageDocument>> => {
        try {
          if (!req.query.id) {
            return res.status(400).send({ error: "No id!" });
          }

          const sanitizedId = validator.trim(req.query.id.toString());

          const coverImage = await CoverImageModel.findOne({
            portfolioItemId: sanitizedId,
          });

          if (!coverImage) {
            return res.status(404).send();
          }

          return res.send(coverImage);
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );

    this.router.post(
      "/coverImage",
      this.parseFile.single("file"),
      async (
        req: Request,
        res: Response
      ): Promise<Response<ErrorResponse | SuccessResponseCoverImagePOST>> => {
        try {
          const { id } = req.body;

          const newCoverImage = new CoverImageModel({
            base64: req.file.buffer.toString("base64"),
            filename: req.file.originalname,
            portfolioItemId: id,
          });

          await newCoverImage.save();

          return res.status(201).send({
            notificationMessage: `${newCoverImage.filename} was created successfully!`,
            coverImage: newCoverImage,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );

    this.router.delete(
      "/coverImage",
      async (
        req: Request,
        res: Response
      ): Promise<Response<ErrorResponse | CoverImageDeleteResponse>> => {
        try {
          const { id } = req.body;

          if (
            !id.match(
              /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
            )
          ) {
            return res.status(400).send({ error: "Incorrect id format." });
          }

          const coverImage = await CoverImageModel.findOneAndDelete({
            _id: validator.trim(id),
          });

          if (!coverImage) {
            return res
              .status(404)
              .send({ error: "No corresponding CoverImage found!" });
          }

          const coverImages = await CoverImageModel.find({});

          return res.send({
            notificationMessage: `${coverImage.filename} was removed successfully!`,
            coverImage,
            coverImages,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );
  }
}

export default CoverImageController;

import express, { Express, Request, Response, Router } from "express";
import multer, { FileFilterCallback } from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

import PortfolioItemModel from "../models/PortfolioItem";

import {
  ErrorResponse,
  PortfolioItem,
  PortfolioItemDocument,
  PortfolioItemModifyResponse,
} from "../types";

class PortfolioItemController {
  public router: Router = express.Router();

  private parseFile = multer({
    fileFilter: (
      req: express.Request,
      file: Express.Multer.File,
      cb: FileFilterCallback
    ) => {
      console.log(`------ parsefile ------`);
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
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        console.log("------ destination ------");
        console.log(path.join(__dirname, "../../uploads"));
        cb(null, path.join(__dirname, "../../uploads"));
      },
      filename: function (req, file, cb) {
        console.log("------ filename ------");
        console.log(`${uuidv4()}.${file.originalname.split(".")[1]}`);
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
      // this.parseFile.single("file"),
      async (req: Request, res: Response): Promise<any> => {
        console.log("------ callback ------");

        const uploadTest = multer({
          fileFilter: (
            req: express.Request,
            file: Express.Multer.File,
            cb: FileFilterCallback
          ) => {
            console.log("------ parseFile ------");
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
          storage: multer.diskStorage({
            destination: function (req, file, cb) {
              console.log("------ destination ------");
              console.log(path.join(__dirname, "../../uploads"));
              cb(null, path.join(__dirname, "../../uploads"));
            },
            filename: function (req, file, cb) {
              console.log("------ filename ------");
              const filename = `${uuidv4()}.${file.originalname.split(".")[1]}`;
              console.log({ filename });
              cb(null, filename);
            },
          }),
        }).single("file");

        uploadTest(req, res, async (err: any) => {
          if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            console.log("A multer error occured when uploading");
            console.error(err);
            return res.status(500).send({ error: err });
          } else if (err) {
            // An unknown error occurred when uploading.
            console.log("An unknown error occured when uploading");
            console.error(err);
            return res.status(500).send({ error: err });
          }

          // Everything went fine.
          console.log("------ everything is fine ------");

          try {
            const {
              content,
              iconBackground,
              iconClass,
              links,
              tagline,
              title,
            } = req.body;
            console.log({ body: JSON.stringify(req.body, null, 2) });
            const newItemData: PortfolioItem = {
              content,
              coverImage: `/uploads/${req.file.filename}`,
              iconBackground,
              iconClass,
              links: JSON.parse(links),
              tagline,
              title,
            };
            console.log({ newItemData });
            const newPortfolioItem = new PortfolioItemModel(newItemData);
            console.log({ newPortfolioItem });

            await newPortfolioItem.save();

            return res.status(201).send(newPortfolioItem);
          } catch (error) {
            console.error(error);
            return res.status(500).send({ error });
          }
        });
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

          const item = await PortfolioItemModel.findOneAndDelete({ _id: id });

          if (!item) {
            return res
              .status(404)
              .send({ error: "No corresponding PortfolioItem found!" });
          }

          const portfolioItems = await PortfolioItemModel.find({});

          return res.send({
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

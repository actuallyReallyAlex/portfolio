import express, { Router, Request, Response } from "express";
// TODO - Remove fs-extra?
import fs from "fs-extra";
import path from "path";

// TODO - Remove
class AssetsController {
  public router: Router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(`/uploads/:file`, async (req: Request, res: Response) => {
      try {
        const filePath = path.join(__dirname, `../..${req.path}`);
        const file = await fs.readFile(filePath);

        if (!file) {
          return res.status(404).send();
        }

        return res.sendFile(filePath);
      } catch (error) {
        console.error(error);
        return res.status(500).send({ error });
      }
    });
  }
}

export default AssetsController;

import express, { Request, Response, Router } from "express";
import path from "path";

import { PortfolioItem } from "../types";

class PortfolioItemController {
  public router: Router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {}
}

export default PortfolioItemController;

import express, { Router } from "express";

class AdminController {
  public router: Router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {}
}

export default AdminController;

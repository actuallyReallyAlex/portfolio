import express, { Request, Response, Router } from "express";

import { ErrorResponse } from "../types";

class AdminController {
  public router: Router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.post(
      "/admin-login",
      async (
        req: Request,
        res: Response
      ): Promise<Response<ErrorResponse | void>> => {
        try {
          return res.status(501).send();
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );
  }
}

export default AdminController;

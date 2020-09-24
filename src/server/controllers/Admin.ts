import express, { Request, Response, Router } from "express";

class AdminController {
  public router: Router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.post(
      "/admin-login",
      async (req: Request, res: Response): Promise<Response<any>> => {
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

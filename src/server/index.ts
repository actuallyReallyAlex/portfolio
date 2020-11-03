import App from "./app";

import AdminController from "./controllers/Admin";
import AssetsController from "./controllers/Assets";
import PortfolioItemController from "./controllers/PortfolioItem";
import UploadsController from "./controllers/Uploads";
import UserController from "./controllers/User";

import { Controller } from "./types";

const main = async (): Promise<void> => {
  try {
    if (!process.env.PORT) throw new Error("No PORT");

    const controllers: Controller[] = [
      new AdminController(),
      new AssetsController(),
      new PortfolioItemController(),
      new UploadsController(),
      new UserController(),
    ];

    const app = new App(controllers, process.env.PORT);

    app.listen();
  } catch (error) {
    console.error(error);
  }
};

main();

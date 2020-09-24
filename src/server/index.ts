import App from "./app";

import AdminController from "./controllers/Admin";
import PortfolioItemController from "./controllers/PortfolioItem";

import { Controller } from "./types";

const main = async (): Promise<void> => {
  try {
    if (!process.env.PORT) throw new Error("No PORT");

    const controllers: Controller[] = [
      new AdminController(),
      new PortfolioItemController(),
    ];

    const app = new App(controllers, process.env.PORT);

    app.listen();
  } catch (error) {
    console.error(error);
  }
};

main();

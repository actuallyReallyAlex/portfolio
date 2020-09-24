import cookieParser from "cookie-parser";
import cors, { CorsOptions } from "cors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import path from "path";

import { Controller } from "./types";

class App {
  public app: express.Application;

  public port: string;

  constructor(controllers: Controller[], port: string) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares(): void {
    if (!process.env.MONGODB_URL) throw new Error("No MOONGODB_URL");

    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    this.app.use(cookieParser());
    this.app.use(express.json());
    this.app.use(morgan("dev"));

    const whitelistDomains = [
      "http://localhost:3000",
      "http://localhost:8080",
      undefined,
    ];

    const corsOptions: CorsOptions = {
      origin: (
        requestOrigin: string | undefined,
        callback: (error: Error | null, success?: boolean | undefined) => void
      ): void => {
        if (whitelistDomains.indexOf(requestOrigin) !== -1) {
          callback(null, true);
        } else {
          console.error(`Sever refused to allow: ${requestOrigin}`);
          callback(new Error("Not allowed by CORS"));
        }
      },
    };

    this.app.use(cors(corsOptions));
  }

  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });

    this.app.use(express.static(path.join(__dirname, "../dist")));

    this.app.get("*", (req: Request, res: Response) => {
      const requestForJS = req.path.includes(".js");
      if (requestForJS) {
        const file = req.path.split("/")[2];
        console.log("");
        console.log({
          request: req.path,
          response: path.join(__dirname, `/dist/${file}`),
        });
        return res.sendFile(path.join(__dirname, `/dist/${file}`));
      }
      console.log("");
      console.log({
        request: req.path,
        response: path.join(__dirname, "/dist/index.html"),
      });
      res.sendFile(path.join(__dirname, "/dist/index.html"));
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Mode: ${process.env.NODE_ENV}\n`);
      console.log(`Server is listening on port: ${this.port}\n`);
      console.log(`Visit http://localhost:${this.port}/ to see view project\n`);
    });
  }
}

export default App;

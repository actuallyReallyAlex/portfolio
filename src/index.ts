import chalk from "chalk";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";

// TODO - Abstract to constants
const port = 3000;

// TODO - Abstract to constants
const whitelistDomains: (string | undefined)[] = [undefined];

// TODO - Abstract to constants
const corsOptions = {
  origin: (
    requestOrigin: string | undefined,
    callback: (error: Error | null, success?: boolean | undefined) => void
  ): void => {
    if (!whitelistDomains.includes(requestOrigin)) {
      console.error(`Sever refused to allow: ${requestOrigin}`);
      callback(new Error("Not allowed by CORS"));
      return;
    }

    callback(null, true);
  },
};

// TODO - Abstract to init file
const init = () => {
  try {
    const app = express();

    app.use(cors(corsOptions));
    app.use(morgan("dev"));

    app.get("*", (req, res) => {
      try {
        res.sendFile(path.resolve('./build/index.html'));
      } catch (error) {
        console.error(error);
      }
    });

    app.listen(port, () => {
      console.log(`Server is listening on port: ${chalk.blue(port)}\n`);
      console.log(
        `Visit ${chalk.blue(`http://localhost:${port}/`)} to view project\n`
      );
    });
  } catch (error) {
    console.error(error);
  }
};

init();

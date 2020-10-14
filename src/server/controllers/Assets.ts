import express, { Router, Request, Response } from "express";
import path from "path";

class AssetsController {
  public router: Router = express.Router();

  static assetList: string[] = [
    "android-chrome-192x192.png",
    "android-chrome-512x512.png",
    "apple-touch-icon.png",
    "avatar-optimized.jpg",
    "browserconfig.xml",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "favicon.ico",
    "mstile-150x150.png",
    "safari-pinned-tab.svg",
    "site.webmanifest",
    "tinymce.min.js",
  ];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    AssetsController.assetList.forEach((asset: string) => {
      this.router.get(
        `/assets/${asset}`,
        async (req: Request, res: Response) => {
          try {
            // console.log(`Asset Request - ${req.path}`);
            const filePath = path.join(__dirname, `../assets/${asset}`);
            // console.log(`Sending - ${filePath}`);
            return res.sendFile(filePath);
          } catch (error) {
            console.error(error);
            return res.status(500).send();
          }
        }
      );
    });
  }
}

export default AssetsController;

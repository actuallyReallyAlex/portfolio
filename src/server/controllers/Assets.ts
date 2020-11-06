import express, { Router, Request, Response } from "express";
import path from "path";

class AssetsController {
  public router: Router = express.Router();

  static assetList = [
    "404.svg",
    "alex-lee-resume.pdf",
    "android-chrome-192x192.png",
    "android-chrome-512x512.png",
    "apple-touch-icon.png",
    "avatar-optimized.jpg",
    "browserconfig.xml",
    "fa-all.min.css",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "favicon.ico",
    "mstile-150x150.png",
    "palm-triangles-50.svg",
    "palm.jpg",
    "safari-pinned-tab.svg",
    "site.webmanifest",
    "tinymce.min.js",
  ];

  static webfontsList = [
    "fa-brands-400.woff2",
    "fa-regular-400.woff2",
    "fa-solid-900.woff2",
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
            const filePath = path.join(__dirname, `../assets/${asset}`);
            return res.sendFile(filePath);
          } catch (error) {
            console.error(error);
            return res.status(500).send();
          }
        }
      );
    });

    AssetsController.webfontsList.forEach((webfont: string) => {
      this.router.get(
        `/webfonts/${webfont}`,
        async (req: Request, res: Response) => {
          try {
            const filePath = path.join(
              __dirname,
              `../assets/webfonts/${webfont}`
            );
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

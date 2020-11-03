import { UserDocument } from "./types";

declare global {
  namespace Express {
    export interface Request {
      user?: UserDocument;
    }
  }
}

import { Document } from "mongoose";

export interface ErrorResponse {
  error: string;
}

export interface MongoImage {
  base64: string;
  filename: string;
}

export interface Notification {
  display: boolean;
  message: () => JSX.Element | null;
  title: string | null;
  type: NotificationType | null;
}

export type NotificationType = "success" | "warning";

export interface PortfolioItem {
  content: string;
  coverImage: MongoImage;
  iconBackground: string;
  iconClass: string;
  links?: {
    demo?: string;
    github?: string;
    npm?: string;
  };
  tagline: string;
  title: string;
}

export interface PortfolioItemDocument extends Document {
  content: string;
  coverImage: MongoImage;
  iconBackground: string;
  iconClass: string;
  links?: {
    demo?: string;
    github?: string;
    npm?: string;
  };
  tagline: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  __v: number;
}

export interface PortfolioItemModifyResponse {
  notificationMessage: string;
  portfolioItem: PortfolioItemDocument;
  portfolioItems: PortfolioItemDocument[];
}

export interface SuccessResponsePortfolioItemPOST {
  notificationMessage: string;
  portfolioItem: PortfolioItemDocument;
}

export interface Token {
  _id: string;
  token: string;
}

export interface UserDocument extends Document {
  _id: string;
  email: string;
  generateAuthToken(): Promise<string>;
  password: string;
  name: string;
  tokens: Token[];
}

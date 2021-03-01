import { Document } from "mongoose";

export interface CoverImageDocument extends Document {
  base64: string;
  filename: string;
  portfolioItemId: string;
}

export interface ErrorResponse {
  error: string;
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

export interface SuccessResponseCoverImagePOST {
  notificationMessage: string;
  coverImage: CoverImageDocument;
}

export interface SuccessResponsePortfolioItemPOST {
  coverImage: CoverImageDocument;
  notificationMessage: string;
  portfolioItem: PortfolioItemDocument;
}

export interface Token {
  _id?: string;
  token: string;
}

export interface UserDocument extends Document {
  _id: string;
  email: string;
  generateAuthToken(): Promise<string>;
  password?: string;
  name: string;
  tokens?: Token[];
}

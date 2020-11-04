import { Request, Router } from "express";
import { Document, Model } from "mongoose";

export interface AuthenticatedRequest extends Request {
  token?: string;
  user?: UserDocument;
}

export type Controller = {
  router: Router;
};

export interface ErrorResponse {
  error: string;
}

export interface MongoImage {
  base64: string;
  filename: string;
}

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
  portfolioItem: PortfolioItemDocument;
  portfolioItems: PortfolioItemDocument[];
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

export interface UserModel extends Model<UserDocument> {
  findByCredentials(email: string, password: string): Promise<UserDocument>;
}

export interface UserRequest extends Request {
  token?: string;
  user?: UserDocument;
}

import { Document } from "mongoose";

export interface PortfolioItem {
  content: string;
  coverImage: string;
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
  coverImage: string;
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

import bcrypt from "bcryptjs";
import express, { Request, Response, Router } from "express";
import validator from "validator";

import UserModel from "../models/User";
import auth from "../middleware/auth";

import {
  AuthenticatedRequest,
  ErrorResponse,
  Token,
  UserDocument,
  UserRequest,
} from "../types";

class UserController {
  public router: Router = express.Router();

  constructor() {
    this.initializeSecret();
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.post(
      "/user",
      async (req: Request, res: Response): Promise<Response<ErrorResponse | UserDocument>> => {
        try {
          const users: UserDocument[] = await UserModel.find({});

          // * Just Alex
          if (users.length > 1) {
            return res.status(403).send();
          }

          const newUser = new UserModel({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
          });

          const token = await newUser.generateAuthToken();
          // * Set a Cookie with that token
          res.cookie("alexlee_dev", token, {
            maxAge: 60 * 60 * 1000, // * 1 hour
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // * localhost isn't https
            sameSite: true,
          });

          await newUser.save();

          return res.status(201).send(newUser);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);

          if (error.errors.email) {
            return res.status(400).send({ error: error.errors.email.message });
          }

          if (error.errors.password) {
            return res
              .status(400)
              .send({ error: error.errors.password.message });
          }

          return res.status(400).send({ error });
        }
      }
    );

    this.router.post(
      "/user/login",
      async (
        req: Request,
        res: Response
      ): Promise<Response<ErrorResponse | UserDocument>> => {
        try {
          if (!req.body.email) {
            return res
              .status(401)
              .send({ error: "Field 'email' is required." });
          }

          if (!req.body.password) {
            return res
              .status(401)
              .send({ error: "Field 'password' is required." });
          }

          if (!validator.isEmail(req.body.email)) {
            return res.status(400).send({ error: "Invalid email address." });
          }

          const matchingUser = await UserModel.findByCredentials(
            req.body.email,
            req.body.password
          );

          if (!matchingUser) {
            return res.status(401).send({ error: "Invalid credentials." });
          }

          const token = await matchingUser.generateAuthToken();

          // * Set a Cookie with that token
          res.cookie("alexlee_dev", token, {
            maxAge: 60 * 60 * 1000, // * 1 hour
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // * localhost isn't https
            sameSite: true,
          });

          return res.send(matchingUser);
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );

    this.router.get(
      "/user/me",
      auth,
      async (
        req: UserRequest,
        res: Response
      ): Promise<Response<ErrorResponse | UserDocument>> => {
        try {
          return res.send(req.user);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );

    this.router.post(
      "/user/logout",
      auth,
      async (
        req: UserRequest,
        res: Response
      ): Promise<Response<ErrorResponse>> => {
        try {
          if (!req.user || !req.user.tokens) {
            return res
              .status(500)
              .send({ error: "No user or tokens attached to request object!" });
          }

          req.user.tokens = req.user.tokens.filter(
            (token: Token) => token.token !== req.token
          );
          await req.user.save();

          res.clearCookie("alexlee_dev");

          return res.status(404).send();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );

    this.router.post(
      "/user/logout/all",
      auth,
      async (req: AuthenticatedRequest, res: Response) => {
        try {
          if (!req.user) {
            return res.status(401).send({ error: "Please authenticate." });
          }
          req.user.tokens = [];
          await req.user.save();

          res.clearCookie("alexlee_dev");

          return res.send({});
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error });
        }
      }
    );

    this.router.patch(
      "/user/me",
      auth,
      async (req: AuthenticatedRequest, res: Response) => {
        try {
          if (!req.user) {
            return res.status(401).send({ error: "Please authenticate." });
          }
          if (req.body.email) {
            const newEmail = req.body.email;

            if (!newEmail || !validator.isEmail(newEmail)) {
              return res.status(400).send({ error: "Invalid email address." });
            }

            req.user.email = newEmail;
            await req.user.save();

            return res.send(req.user);
          }

          const { currentPassword, newPassword } = req.body;

          // * Check if currrentPassword matches password in DB
          const isMatch = await bcrypt.compare(
            currentPassword,
            req.user.password
          );
          if (!isMatch) {
            return res.status(401).send({ error: "Invalid credentials" });
          }

          // TODO - Server Side Password validation

          // * Set newPassword
          req.user.password = newPassword;
          await req.user.save();

          // * Send User as respoonse
          return res.send(req.user);
        } catch (error) {
          if (error.errors.password) {
            // * Min Length Validation Error
            if (error.errors.password.kind === "minlength") {
              return res.status(400).send({
                error: "Password must be a minimum of 7 characters in length",
              });
            }
            // * Password Validation Error
            return res
              .status(400)
              .send({ error: error.errors.password.message });
          }

          // eslint-disable-next-line no-console
          console.error(error);

          return res.status(500).send({ error });
        }
      }
    );
  }

  public initializeSecret(): void {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not provided!");
    }
  }
}

export default UserController;

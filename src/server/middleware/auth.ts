import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

import { UserDocument, UserRequest } from "../types";

const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  try {
    const tokenFromCookie = req.cookies.tgarrettpetersen;
    // *Check if Cookie exists
    if (tokenFromCookie) {
      // *Verify the jwt value
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decoded: any = jwt.verify(
        tokenFromCookie,
        process.env.JWT_SECRET || ""
      );
      const user: UserDocument | null = await User.findOne({
        _id: decoded._id,
        "tokens.token": tokenFromCookie,
      });

      if (!user) {
        throw new Error(
          `No user found in database. { _id: ${decoded._id}, tokens.token: ${tokenFromCookie}, path: ${req.originalUrl} }`
        );
      }

      // * User is authenticated
      req.user = user;
      next();
    } else {
      // * User is not authenticated correctly
      res.status(401).send({ error: "Please authenticate." });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    res.status(500).send({ error });
  }
};

export default auth;

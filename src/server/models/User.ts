import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import validator from "validator";

import { UserDocument, UserModel } from "../types";

const userSchema = new mongoose.Schema(
  {
    // * Email, Password, etc
    email: {
      lowercase: true,
      required: true,
      trim: true,
      type: String,
      unique: true,
      validate: (value: any): boolean => {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid.");
        }
        return true;
      },
    },
    name: {
      required: false,
      trim: true,
      type: String,
    },
    password: {
      minlength: 7,
      required: true,
      trim: true,
      type: String,
      validate: (value: any): boolean => {
        // * Password should contain:
        // * 1. At least 1 uppercase letter
        // * 2. At least 1 lowercase letter
        // * 3. At least 1 letter
        // * 4. At least 1 number
        // * 5. At least 1 special character

        if (value.toLowerCase().includes("password")) {
          throw new Error(`Password can't contain the string "password"`);
        }

        if (validator.isLowercase(value)) {
          throw new Error(
            "Password should contain at least 1 uppercase letter"
          );
        }

        if (validator.isUppercase(value)) {
          throw new Error(
            "Password should contain at least 1 lowercase letter"
          );
        }

        if (validator.isNumeric(value)) {
          throw new Error(
            "Password must contain at least 1 uppercase letter and 1 lowercase letter"
          );
        }

        // eslint-disable-next-line no-restricted-globals
        if (value.split("").every((char: unknown) => isNaN(Number(char)))) {
          throw new Error("Password should contain at least 1 number");
        }

        if (validator.isAlphanumeric(value)) {
          throw new Error(
            "Password should contain at least 1 special character"
          );
        }

        return true;
      },
    },
    tokens: [
      {
        token: {
          required: true,
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

function contentToJSON(this: any): void {
  const userObj = this.toObject();

  delete userObj.password;
  delete userObj.tokens;

  return userObj;
}

userSchema.methods.toJSON = contentToJSON;

userSchema.methods.generateAuthToken = async function (): Promise<string> {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET not provided!");
  }

  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, process.env.JWT_SECRET);

  user.tokens = user.tokens.concat({ token });

  await user.save();

  return token;
};

userSchema.statics.findByCredentials = async (
  email: string,
  password: string
): Promise<UserDocument | null> => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const user: UserDocument | null = await User.findOne({ email });

  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return null;
  }

  return user;
};

userSchema.pre("save", async function (next): Promise<void> {
  const user: any = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model<UserDocument, UserModel>("User", userSchema);

export default User;

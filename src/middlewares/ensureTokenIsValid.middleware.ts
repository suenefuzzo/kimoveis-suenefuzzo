import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import jwt from "jsonwebtoken";

const ensureTokenIsValid = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let token: string | undefined = request.headers.authorization;

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) throw new AppError(error.message, 401);

    response.locals.id = decoded.sub;
    response.locals.admin = decoded.admin;

    return next();
  });
};

export default ensureTokenIsValid;

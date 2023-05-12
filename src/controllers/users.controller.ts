import { Request, Response } from "express";
import { TUserRequest } from "../interfaces/user.interfaces";
import createUserService from "../services/users/createUser.service";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TUserRequest = request.body;

  const newUser = await createUserService(userData);

  return response.status(201).json(newUser);
};

export { createUserController };

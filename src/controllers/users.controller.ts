import { Request, Response } from "express";
import { TUserRequest, TUserResponse } from "../interfaces/user.interfaces";
import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUsers.service";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TUserRequest = request.body;

  const newUser = await createUserService(userData);

  return response.status(201).json(newUser);
};

const listUsersController = async (request: Request, response: Response): Promise<Response> => {
  const listUsers: TUserResponse[] = await listUsersService();

  return response.json(listUsers)
};

export { createUserController, listUsersController };

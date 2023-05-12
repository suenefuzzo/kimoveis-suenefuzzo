import { Request, Response } from "express";
import { TUserRequest, TUserResponse, TUserUpdateRequest } from "../interfaces/user.interfaces";
import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";

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

const updateUserController =async (request: Request, response: Response): Promise<Response> => {
  const userData: TUserUpdateRequest = request.body;

  const userId: number = Number(request.params.id);

  const newUserData: TUserResponse = await updateUserService(userData, userId);

  return response.status(200).json(newUserData);
}

const deleteUserController = async (request: Request, response: Response): Promise<Response> => {
  const userId: number = Number(request.params.id);

  await deleteUserService(userId);

  return response.status(204).send();
};

export { createUserController, listUsersController, updateUserController, deleteUserController };

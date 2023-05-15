import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../error";

const ensureUserExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const idUser: number = Number(request.params.id);

  const user: User | null = await userRepository.findOneBy({
    id: idUser
  
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  response.locals.foundUser = user;

  return next();
};

export default ensureUserExistsMiddleware;

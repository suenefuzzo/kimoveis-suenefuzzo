import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";

const checksIfUserAlreadyDeletesMiddleware = async (request: Request, response: Response, next: NextFunction): Promise<Response | void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

  

    return next();
};

export default checksIfUserAlreadyDeletesMiddleware;
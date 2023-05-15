import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../error";

const checksEmailExistsMiddleware = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const userEmail: string = request.body.email;

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    if(!userEmail){
        return next()
    }

    const user = await userRepository.find({
        where: {
            email: userEmail
        }
    });

    if(user.length > 0){
        throw new AppError("Email already exists", 409)
    };

    return next();
};

export default checksEmailExistsMiddleware;
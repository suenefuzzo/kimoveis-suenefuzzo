import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const ensureCategoryExistsMiddleware = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const categoryId: number = Number(request.params.id)

    const category = await categoryRepository.findOne({
        where: {
            id: categoryId
        }
    })

    if(!category){
        throw new AppError("Category not found", 404)
    }

    return next()
};

export default ensureCategoryExistsMiddleware;
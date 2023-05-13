import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const checksIfCaategoryNameAlreadyExistsMidlleware = async (request: Request, response: Response, next: NextFunction) => {
    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category);
    
    const categoryName: string = request.body.name;

    if(!categoryName){
        return next();
    };

    const category = await categoriesRepository.find({
        where:{
            name: categoryName
        }
    });

    if(category.length > 0){
        throw new AppError("Category already exists", 409)
    }

    return next();
};

export default checksIfCaategoryNameAlreadyExistsMidlleware
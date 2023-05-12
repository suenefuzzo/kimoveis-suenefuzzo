import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const checksAdminPermission = (request: Request, response: Response, next: NextFunction): void => {
    const { admin } = response.locals;

    if(!admin){
        throw new AppError("Insufficient permission", 403);
    };

    return next();
};

export default checksAdminPermission;
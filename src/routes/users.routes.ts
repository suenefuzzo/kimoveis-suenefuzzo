import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureValidData.middleware";
import { userSchemaRequest } from "../schemas/users.schemas";
import checksEmailExistsMiddleware from "../middlewares/checksEmailExists.middleware";

const usersRoutes: Router = Router();

usersRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), checksEmailExistsMiddleware, createUserController);

usersRoutes.get("", );

usersRoutes.patch("/:id", );

usersRoutes.delete("/:id", );

export default usersRoutes;
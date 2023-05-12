import { Router } from "express";
import { createUserController, listUsersController } from "../controllers/users.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureValidData.middleware";
import { userSchemaRequest } from "../schemas/users.schemas";
import checksEmailExistsMiddleware from "../middlewares/checksEmailExists.middleware";
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid.middleware";
import checksAdminPermission from "../middlewares/checksAdminPermission.middleware";

const usersRoutes: Router = Router();

usersRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), checksEmailExistsMiddleware, createUserController);

usersRoutes.get("", ensureTokenIsValid, checksAdminPermission,listUsersController);

usersRoutes.patch("/:id", );

usersRoutes.delete("/:id", );

export default usersRoutes;
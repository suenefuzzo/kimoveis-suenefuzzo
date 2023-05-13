import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureValidData.middleware";
import { updatedUserSchema, userSchemaRequest } from "../schemas/users.schemas";
import checksEmailExistsMiddleware from "../middlewares/checksEmailExists.middleware";
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid.middleware";
import checksAdminPermission from "../middlewares/checksAdminPermission.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import checksIfAdminOrOrdinaryUser from "../middlewares/checkIfAdminOrOrdinaryUser.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";

const usersRoutes: Router = Router();

usersRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), checksEmailExistsMiddleware, createUserController);

usersRoutes.get("", ensureTokenIsValidMiddleware, checksAdminPermission, listUsersController);

usersRoutes.patch("/:id", ensureDataIsValidMiddleware(updatedUserSchema), ensureTokenIsValidMiddleware, ensureUserExistsMiddleware, checksIfAdminOrOrdinaryUser, updateUserController);

usersRoutes.delete("/:id", ensureTokenIsValid, ensureUserExistsMiddleware, checksIfAdminOrOrdinaryUser, deleteUserController);

export default usersRoutes;
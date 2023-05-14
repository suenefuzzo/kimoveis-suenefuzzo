import { Router } from "express";
import { createRealEstateController, listRealEstateController } from "../controllers/realEstate.controller";
import ensureCategoryExistsMiddleware from "../middlewares/ensureCategoryExists.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import checksAdminPermission from "../middlewares/checksAdminPermission.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureValidData.middleware";
import { realEstateSchemaRequest } from "../schemas/realEstate.schema";

const realEstateRoutes: Router = Router();

realEstateRoutes.post("", ensureTokenIsValidMiddleware, checksAdminPermission, ensureDataIsValidMiddleware(realEstateSchemaRequest), ensureCategoryExistsMiddleware,createRealEstateController);

realEstateRoutes.get("", listRealEstateController)

export default realEstateRoutes;
import { Router } from "express";
import {
  createCategoryController,
  listCategoriesController,
  listRealEstatesByCategoryController,
} from "../controllers/categories.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureValidData.middleware";
import { categorySchemaRequest } from "../schemas/categories.schemas";
import checksIfCategoryNameAlreadyExistsMidlleware from "../middlewares/checksIfCategoryNameAlreadyExists.middleware";
import checksIfAdminOrOrdinaryUser from "../middlewares/checkIfAdminOrOrdinaryUser.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureCategoryExistsMiddleware from "../middlewares/ensureCategoryExists.middleware";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  ensureDataIsValidMiddleware(categorySchemaRequest),
  ensureTokenIsValidMiddleware,
  checksIfAdminOrOrdinaryUser,
  checksIfCategoryNameAlreadyExistsMidlleware,
  createCategoryController
);

categoriesRoutes.get("", listCategoriesController);

categoriesRoutes.get(
  "/:id/realEstate",
  ensureCategoryExistsMiddleware,
  listRealEstatesByCategoryController
);

export default categoriesRoutes;
